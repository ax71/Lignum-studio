import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (amount: number, locale: string = "id") => {
  return new Intl.NumberFormat(locale === "id" ? "id-ID" : "en-US", {
    style: "currency",
    currency: locale === "id" ? "IDR" : "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(locale === "en" ? amount / 17000 : amount); // Asumsi kurs sederhana untuk demo
};
