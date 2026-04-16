import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "kjjmrrxv", // GANTI DENGAN PROJECT ID KAMU JIKA BERBEDA
  dataset: "production",
  apiVersion: "2024-04-16",
  useCdn: false,
});