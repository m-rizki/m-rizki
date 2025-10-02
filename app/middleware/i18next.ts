import { initReactI18next } from "react-i18next";
import { createCookie } from "react-router";
import { createI18nextMiddleware } from "remix-i18next/middleware";
import resources from "~/locales";

/**
 * Cookie configuration for storing the user's language preference
 * This cookie will be used to persist the language selection across sessions
 */
export const localeCookie = createCookie("lng", {
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
});

/**
 * Setup i18next middleware
 * Returns an array with 3 elements:
 * - i18nextMiddleware: Middleware for server-side rendering
 * - getLocale: Function to get the current locale
 * - getInstance: Configured i18next instance
 */
export const [i18nextMiddleware, getLocale, getInstance] =
  createI18nextMiddleware({
    detection: {
      supportedLanguages: ["id", "en"],
      fallbackLanguage: "en",
      cookie: localeCookie,
    },
    i18next: { resources },
    plugins: [initReactI18next],
  });

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof resources.en;
  }
}
