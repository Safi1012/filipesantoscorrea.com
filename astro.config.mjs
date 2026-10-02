import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Only SVGs are used, which don't need sharp-based optimization
  image: {
    service: passthroughImageService(),
  },
});
