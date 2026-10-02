import { defineConfig, envField, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://filipesantoscorrea.com",
  // Only SVGs are used, which don't need sharp-based optimization
  image: {
    service: passthroughImageService(),
  },
  // Legal contact details are provided at build time (GitHub Actions variables
  // in CI, `.env` locally) so they aren't committed to the repository
  env: {
    schema: {
      LEGAL_NAME: envField.string({ context: "server", access: "public" }),
      LEGAL_STREET: envField.string({ context: "server", access: "public" }),
      LEGAL_POSTAL_CODE: envField.string({
        context: "server",
        access: "public",
      }),
      LEGAL_CITY: envField.string({ context: "server", access: "public" }),
      LEGAL_EMAIL: envField.string({ context: "server", access: "public" }),
    },
  },
});
