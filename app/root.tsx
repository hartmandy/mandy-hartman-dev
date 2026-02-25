import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
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

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  // Keep static/asset URLs working even while we hide other pages.
  const allowlistedPrefixes = ["/build/"];
  const allowlistedExact = [
    "/favicon.ico",
    "/robots.txt",
    "/sitemap.xml",
    "/site.webmanifest",
  ];

  const isAllowlisted =
    allowlistedExact.includes(url.pathname) ||
    allowlistedPrefixes.some((p) => url.pathname.startsWith(p));

  if (
    !isAllowlisted &&
    url.pathname !== "/" &&
    (request.method === "GET" || request.method === "HEAD")
  ) {
    throw redirect("/");
  }

  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={isHome ? "" : "p-4 md:p-8"}>
        {isHome ? (
          <Outlet />
        ) : (
          <div className="max-w-7xl mx-auto border border-neutral-700 rounded-lg overflow-hidden">
            <Menu />
            <div className="px-4 md:px-8">
              <Outlet />
            </div>
            <Footer />
          </div>
        )}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "production" ? null : <LiveReload />}
      </body>
    </html>
  );
}
