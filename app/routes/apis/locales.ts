import { data } from 'react-router';
import resources from '~/locales';

import type { Route } from "./+types/locales";
export async function loader({ params }: Route.LoaderArgs) {
  // Manual validation for lng parameter
  const lng = params.lng;
  if (
    !lng ||
    typeof lng !== "string" ||
    !Object.keys(resources).includes(lng)
  ) {
    return data(
      { error: "Invalid or missing language parameter" },
      { status: 400 },
    );
  }

  // Type assertion after validation
  const validLng = lng as keyof typeof resources;
  const namespaces = resources[validLng];

  // Manual validation for ns parameter
  const ns = params.ns;
  if (!ns || typeof ns !== "string" || !Object.keys(namespaces).includes(ns)) {
    return data(
      { error: "Invalid or missing namespace parameter" },
      { status: 400 },
    );
  }

  // Type assertion after validation
  const validNs = ns as keyof typeof namespaces;

  const headers = new Headers();

  // Manual cache header construction for production
  if (process.env.NODE_ENV === "production") {
    const cacheDirectives = [
      "max-age=300", // Cache in browser for 5 minutes (5 * 60 = 300)
      "s-maxage=86400", // Cache in CDN for 1 day (24 * 60 * 60 = 86400)
      "stale-while-revalidate=604800", // Serve stale while revalidating for 7 days (7 * 24 * 60 * 60)
      "stale-if-error=604800", // Serve stale if error for 7 days
    ];

    headers.set("Cache-Control", cacheDirectives.join(", "));
  }

  return data(namespaces[validNs], { headers });
}
