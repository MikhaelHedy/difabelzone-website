export default {
  name: 'landingPage',
  type: 'document',
  title: 'Konten Halaman Utama',
  fields: [
    // --- SECTION HERO ---
    {
      name: 'heroTitle',
      type: 'string',
      title: 'Judul Utama (Hero)',
    },
    {
      name: 'heroDescription',
      type: 'text',
      title: 'Deskripsi Hero',
    },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Foto Hero Utama',
      description: 'Foto besar yang ada di bagian atas',
      options: { hotspot: true }
    },

    // --- SECTION HISTORY ---
    {
      name: 'historyContent',
      type: 'text',
      title: 'Isi Sejarah (Our Journey)',
    },
    {
      name: 'historyImage1',
      type: 'image',
      title: 'Foto Sejarah 1 (Kiri Atas)',
      options: { hotspot: true }
    },
    {
      name: 'historyImage2',
      type: 'image',
      title: 'Foto Sejarah 2 (Kanan Atas)',
      options: { hotspot: true }
    },
    {
      name: 'historyImage3',
      type: 'image',
      title: 'Foto Sejarah 3 (Kanan Bawah)',
      options: { hotspot: true }
    },

    // --- SECTION ARTISTRY ---
    {
      name: 'artistryImage',
      type: 'image',
      title: 'Foto Karya Batik (Section Artistry)',
      options: { hotspot: true }
    },
    {
      name: 'contactEmail',
      type: 'string',
      title: 'Email Kontak',
      initialValue: 'difabelzone.id@gmail.com'
    },
    {
      name: 'contactWhatsapp',
      type: 'string',
      title: 'Nomor WhatsApp',
      description: 'Gunakan format 628123456xxx (tanpa tanda +)',
      initialValue: '628157902425'
    }
  ]
}