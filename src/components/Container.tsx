import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-[20px] sm:px-[40px] lg:px-[80px] ${className}`}>
      {children}
    </div>
  );
}
