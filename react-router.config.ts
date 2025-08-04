import type { Config } from "@react-router/dev/config";

declare module "react-router" {
  interface Future {
    unstable_middleware: true;
  }
}

export default {
  // Config options...
  future: {
    unstable_middleware: true,
  },
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
} satisfies Config;
