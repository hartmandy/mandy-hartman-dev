import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";

import Footer from "~/components/Footer";
import Menu from "~/components/Menu";

import "./tailwind.css";

export const loader = () => null;

function HomeHeader() {
  return (
    <header className="mb-8 border-b border-neutral-700 px-4 py-6 md:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-neutral-700">
        Software Engineer
      </p>
    </header>
  );
}

function MinimalHeader() {
  return (
    <header className="mb-8 border-b border-neutral-700 px-4 py-6 md:px-8">
      <a
        href="/"
        className="text-2xl font-bold text-neutral-700 transition-colors hover:text-black"
      >
        Mandy Hartman
      </a>
    </header>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isMinimalHeader =
    pathname.startsWith("/case-studies") || pathname.startsWith("/blog/");

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="p-4 md:p-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-neutral-700">
          {isHome ? (
            <HomeHeader />
          ) : isMinimalHeader ? (
            <MinimalHeader />
          ) : (
            <Menu />
          )}
          <div className="px-4 md:px-8">
            <Outlet />
          </div>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "production" ? null : <LiveReload />}
      </body>
    </html>
  );
}
