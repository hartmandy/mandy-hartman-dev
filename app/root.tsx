import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Footer from "~/components/Footer";
import Menu from "~/components/Menu";

import "./tailwind.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto border border-neutral-700 rounded-lg overflow-hidden">
          <Menu />
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
