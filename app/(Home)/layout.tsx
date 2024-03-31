import { Navbar } from "../../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-white dark:bg-[#1b1b1b] min-h-full">{children}</main>
    </>
  );
}
