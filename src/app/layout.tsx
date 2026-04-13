// This file intentionally left minimal.
// All layout logic has moved to src/app/[locale]/layout.tsx
// which handles <html>, <body>, providers, and locale-aware metadata.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
