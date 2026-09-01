import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fungsi utilitas untuk menggabungkan class Tailwind secara dinamis
 * tanpa takut terjadi konflik (misal: px-4 dan px-8 bertabrakan).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}