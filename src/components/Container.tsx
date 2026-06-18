import { ReactNode } from "react";

/**
 * Centres content at the desktop column width.
 * Desktop spec: 1440 frame, 80px gutter, 1280px max content.
 */
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-[80px] ${className}`}>
      {children}
    </div>
  );
}
