// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
    env: {
    schema: {
      RECAPTCHA_SITE_KEY: envField.string({
        context: "client", access: "public"
      }),
    }
  }
});
