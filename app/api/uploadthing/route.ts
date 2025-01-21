import { createRouteHandler } from "uploadthing/next";
import { imageRouter } from "./core";
// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: imageRouter,
  // Apply an (optional) custom config:
  // config: { ... },
});