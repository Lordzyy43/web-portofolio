import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// Menggunakan antarmuka standar HTMLDivElement agar Container ini
// mewarisi semua properti bawaan <div> (seperti id, onClick, style, dll)
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-12",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

// Menambahkan displayName sangat penting saat menggunakan forwardRef
// agar nama komponen tetap terbaca jelas saat kita melakukan debugging di React DevTools
Container.displayName = "Container";
