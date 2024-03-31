"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { cn } from "@/lib/utils";
import { useMenuModal } from "@/hooks/useMenuModal";

export const Navbar = () => {
  const menu = useMenuModal();
  return (
    <div
      className={cn(
        "w-full bg-secondary dark:bg-[#191919]/50 backdrop-blur-sm z-50 transition-all duration-300"
      )}
    >
      <div className="mx-auto max-w-7xl px-3 py-6 block max-md:hidden">
        <div className="flex justify-between">
          <div className="flex flex-row" data-name="title">
            <Link href="/">
              <div className="flex items-center gap-x-2">
                <Image src="/Logo.png" alt="logo" width={48} height={48} />
                <h1 className="text-3xl font-semibold">SquareUp</h1>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link
                    href="/"
                    className="rounded bg-primary-foreground px-3 py-2 text-base font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="rounded bg-primary-foreground px-3 py-2 text-base font-medium"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="rounded bg-primary-foreground px-3 py-2 text-base font-medium"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/process"
                    className="rounded bg-primary-foreground px-3 py-2 text-base font-medium"
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="rounded bg-primary-foreground px-3 py-2 text-base font-medium"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="rounded bg-primary-foreground px-3 py-2 text-base font-medium"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="">
            <ModeToggle />
          </div>
        </div>
      </div>
      <div className="max-md:block hidden px-2 py-6  mx-auto max-sm:max-w-lg">
        <div className="flex justify-between items-center">
          <div className="items-center" data-name="title">
            <h1 className="text-3xl font-semibold">SquareUp</h1>
          </div>
          <div className="">
            <Button variant="ghost" onClick={menu.onOpen}>
              <MenuIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
