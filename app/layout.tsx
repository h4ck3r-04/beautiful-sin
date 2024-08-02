import "./globals.css";
import { Poppins } from "next/font/google";
import { TOOL_NAME, TOOL_DESCRIPTION } from "@/data/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: TOOL_NAME,
  description: TOOL_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="flex flex-col items-center justify-center align-middle">
          <div className="px-4 py-2">{children}</div>
        </main>
      </body>
    </html>
  );
}
