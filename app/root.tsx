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
      <body className="container mx-auto">
        <Menu />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "production" ? null : <LiveReload />}
        <Footer />
      </body>
    </html>
  );
}
