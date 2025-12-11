import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CustomToastContainer from "@/components/Ui/ToastContainer";

const Shabnam = localFont({
  src: [
    {
      path: "../assets/fonts/Shabnam-FD.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-shabnam",
  display: "swap",
  preload: true,            
  fallback: ["system-ui", "arial"],
});

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "ریفیوژن | سایت املاک",
    description: "سایتی برای رهن , اجاره , رزرو و خرید خانه مورد نظر برای هر نوع کاربر با فیچر هایی برای به وجود آوردن تجربه کاربری عالی",
    keywords: ['فروش خانه', 'خرید خانه', 'رزرو خانه', 'رهن خانه', 'اجاره خانه', 'سایت املاک', 'ریفیوژن'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="" suppressHydrationWarning>
      <body className={`${Shabnam.variable} font-shabnam antialiased`}>
        {children}
        <CustomToastContainer />
      </body>
    </html>
  );
}