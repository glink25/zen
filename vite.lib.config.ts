import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        dts({ tsconfigPath: "./tsconfig.app.json", rollupTypes: true }),
    ],
    resolve: { alias: { "@": resolve("./src") } },
    build: {
        outDir: "dist",
        copyPublicDir: false,
        lib: {
            entry: resolve("./src/index.ts"),
            formats: ["es"],
            fileName: "index",
        },
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "react/jsx-runtime",
                "@glink25/chaty",
                "clsx",
                "dayjs",
                "tailwind-merge",
                "zod",
            ],
        },
    },
});
