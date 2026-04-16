// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. Ganti ini nanti dengan domain asli kamu (misal: https://difabelzone.or.id)
  // Alamat ini penting agar SEO Sitemap bisa digenerate dengan benar.
  site: 'https://difabelzone-indonesia.vercel.app', 

  integrations: [
    mdx(), 
    sitemap() // Menghasilkan sitemap-index.xml otomatis untuk Google
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  // Catatan: Bagian fonts Atkinson dihapus karena kita sudah pakai Poppins via CSS.
});