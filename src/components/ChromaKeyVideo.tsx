"use client";

import { useEffect, useRef, useState } from "react";

type RGB = { r: number; g: number; b: number };

interface ChromaKeyVideoProps {
  src: string;
  poster: string;
  width: number;
  height: number;
  className?: string;
  "aria-label"?: string;
  keyColor?: RGB;
  tolerance?: number;
}

const DEFAULT_KEY_COLOR: RGB = { r: 255, g: 255, b: 255 };
// Distance threshold in RGB space — wide enough to catch near-white
// anti-aliased edges around the linework without eating into light fills.
const DEFAULT_TOLERANCE = 60;

export default function ChromaKeyVideo({
  src,
  poster,
  width,
  height,
  className,
  "aria-label": ariaLabel,
  keyColor = DEFAULT_KEY_COLOR,
  tolerance = DEFAULT_TOLERANCE,
}: ChromaKeyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offscreenRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [posterVisible, setPosterVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    if (!offscreenRef.current) {
      offscreenRef.current = document.createElement("canvas");
    }
    const offscreen = offscreenRef.current;
    offscreen.width = width;
    offscreen.height = height;

    const ctx = canvas.getContext("2d");
    const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
    if (!ctx || !offCtx) return;

    video.play().catch(() => {
      // Autoplay can be blocked before user interaction on some browsers;
      // the poster stays visible in that case since no frame gets drawn.
    });

    const { r: kr, g: kg, b: kb } = keyColor;
    const toleranceSq = tolerance * tolerance;
    let firstFrameDrawn = false;

    const draw = () => {
      if (video.readyState >= video.HAVE_CURRENT_DATA) {
        offCtx.drawImage(video, 0, 0, width, height);
        const frame = offCtx.getImageData(0, 0, width, height);
        const data = frame.data;

        for (let i = 0; i < data.length; i += 4) {
          const dr = data[i] - kr;
          const dg = data[i + 1] - kg;
          const db = data[i + 2] - kb;
          if (dr * dr + dg * dg + db * db <= toleranceSq) {
            data[i + 3] = 0;
          }
        }

        ctx.putImageData(frame, 0, 0);

        if (!firstFrameDrawn) {
          firstFrameDrawn = true;
          setPosterVisible(false);
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [width, height, keyColor, tolerance]);

  return (
    <div className={`relative ${className ?? ""}`}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          opacity: 0,
          pointerEvents: "none",
        }}
      />
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        role="img"
        aria-label={ariaLabel}
        className="block h-auto w-full"
      />
      <img
        src={poster}
        alt={ariaLabel ?? ""}
        width={width}
        height={height}
        className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
          posterVisible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </div>
  );
}
