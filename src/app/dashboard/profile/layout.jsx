"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileLayout({ children }) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <main
          className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 
        bg-muted/40 p-4 md:gap-8 md:p-10"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-3xl font-semibold">Navigate</h1>
          </div>
          <div
            className="mx-auto grid w-full max-w-6xl items-start gap-6
           md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
          >
            <nav
              className="grid gap-4 text-sm text-muted-foreground"
              x-chunk="dashboard-04-chunk-0"
            >
              <Link
                className={`link transition-colors hover:text-foreground ${
                  pathname === "/dashboard/profile"
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                href="/dashboard/profile"
              >
                Profile
              </Link>
              <Link
                className={`link transition-colors hover:text-foreground ${
                  pathname === "/dashboard/profile/menu"
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                href="/dashboard/profile/menu"
              >
                Menu
              </Link>
            </nav>
            <main>{children}</main>
          </div>
        </main>
      </div>
    </>
  );
}
