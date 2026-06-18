import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root so Next ignores stray lockfiles elsewhere on the machine.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
