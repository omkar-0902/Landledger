import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "about_us/screen.png", dest: "about_us" },
        { src: "landing_guest/screen.png", dest: "landing_guest" },
        { src: "landing_logged_in/screen.png", dest: "landing_logged_in" },
        { src: "login/screen.png", dest: "login" },
        { src: "property_details_primary/screen.png", dest: "property_details_primary" },
        { src: "property_details_secondary/screen.png", dest: "property_details_secondary" },
        { src: "secure_access/screen.png", dest: "secure_access" },
        { src: "Rgister_user/screen.png", dest: "Rgister_user" },
      ],
    }),
  ],
});

