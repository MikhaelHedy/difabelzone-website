import { createImageUrlBuilder } from '@sanity/image-url'; // Gunakan named import {}
import { client } from './sanity';

// Pakai fungsi createImageUrlBuilder
const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return null; // Tambahkan pengaman jika foto kosong
  return builder.image(source);
}