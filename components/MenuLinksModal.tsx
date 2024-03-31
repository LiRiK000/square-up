import Link from "next/link";
import React from "react";

export const MenuLinksModal = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-col w-max space-y-5">
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
  );
};
