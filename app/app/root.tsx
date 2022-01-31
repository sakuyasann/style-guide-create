import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import { ThemeProvider } from "./provider";

import resetCss from 'destyle.css'
import { RecoilRoot } from "recoil";

export const meta: MetaFunction = () => {
  return { title: "Style guide create" };
};

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: resetCss
    }
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <RecoilRoot>
          <ThemeProvider>
            <Outlet />
          </ThemeProvider>
        </RecoilRoot>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
