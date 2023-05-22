import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haotian's Website",
};

export default function RootLayout({
  children,
  left,
}: {
  children: React.ReactNode;
  left: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
