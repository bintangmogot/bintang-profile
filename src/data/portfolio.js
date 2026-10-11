// Public portfolio content only. Private project data and access details stay out.
export const additionalProjects = (lang = 'EN') => {
  const en = lang === 'EN';
  return [
    {
      id: 'dotlinetattu', media: '/images/projects/dotlinetattu.png', coverFit: 'contain', year: '2026', madeAt: 'Freelance', navTitle: 'Tattoo booking',
      title: 'Dotlinetattu — Tattoo Studio & Booking',
      description: en ? 'A tattoo studio website with online bookings, deposit payments, and a studio administration workflow.' : 'Website studio tato dengan booking online, pembayaran deposit, dan alur administrasi studio.',
      techStack: ['Next.js', 'TypeScript', 'Supabase', 'Midtrans', 'Tailwind CSS'],
      features: en ? ['Tattoo portfolio and gallery', 'Custom and flash tattoo booking', 'Deposit payment integration', 'Studio booking administration'] : ['Portofolio dan galeri tato', 'Booking tato custom dan flash', 'Integrasi pembayaran deposit', 'Administrasi booking studio'],
      liveLink: 'https://dotlinetattu.com/', githubLink: '',
    },
    {
      id: 'obsidian-tracker', year: '2026', madeAt: 'Independent', navTitle: 'Equipment ops',
      title: 'Obsidian Tracker', status: en ? 'In development' : 'Dalam pengembangan',
      description: en ? 'A mobile-first operations app for equipment incidents, maintenance history, and shift work.' : 'Aplikasi operasional untuk laporan insiden alat, riwayat perawatan, dan pekerjaan shift.',
      longDescription: en ? 'Built around the day-to-day needs of a fitness studio, Obsidian Tracker brings equipment reports, maintenance history, and shift work into one mobile-first interface.\n\nThe project includes a Supabase data path and a Google Sheets mirror. Application acceptance checks, staff onboarding, and device notification checks remain part of the launch work.' : 'Obsidian Tracker menyatukan laporan alat, riwayat perawatan, dan pekerjaan shift dalam antarmuka yang dirancang untuk ponsel.\n\nProyek ini menggunakan Supabase dan mirror Google Sheets. Pengujian aplikasi, onboarding staf, dan pengujian notifikasi perangkat masih menjadi bagian dari persiapan peluncuran.',
      techStack: ['Vue 3', 'Vite', 'Tailwind CSS', 'Supabase', 'Apps Script'],
      features: en ? ['Equipment incident reporting', 'Maintenance history and Worklist', 'Staff access and roles', 'Google Sheets mirroring'] : ['Pelaporan insiden alat', 'Riwayat perawatan dan Worklist', 'Akses dan peran staf', 'Mirror Google Sheets'],
      liveLink: 'https://bintangcodes.space/', githubLink: '', isPrivate: true,
    },
    {
      id: 'session-desk', year: '2026', madeAt: 'Independent', navTitle: 'Session desk',
      title: 'Session Desk — PT Session Tracker',
      description: en ? 'A shared front-desk and coach tool for tracking client visits, session credits, and activity history.' : 'Alat bersama untuk front desk dan pelatih dalam mencatat kunjungan, kredit sesi, dan riwayat aktivitas.',
      techStack: ['JavaScript', 'CSS', 'Supabase', 'Web Push'],
      features: en ? ['Front-desk visit and credit management', 'Coach-specific read-only views', 'Dated activity and balance history', 'Mobile-first interface'] : ['Pengelolaan kunjungan dan kredit sesi', 'Tampilan baca untuk masing-masing pelatih', 'Riwayat aktivitas dan saldo bertanggal', 'Antarmuka untuk ponsel'],
      liveLink: 'https://obs-pt-session-tracker.vercel.app/', githubLink: '', isPrivate: true,
    },
    {
      id: 'front-office', year: '2026', madeAt: 'Independent', navTitle: 'Front office',
      title: 'Obsidian Front Office App',
      description: en ? 'A bilingual knowledge and workflow hub for the front-office team at a fitness studio.' : 'Pusat pengetahuan dan alur kerja bilingual untuk tim front office studio kebugaran.',
      techStack: ['JavaScript', 'Vite', 'CSS'],
      features: en ? ['Front-desk SOP reference', 'Shift handover guidance', 'Membership and facility information', 'English and Indonesian content'] : ['Referensi SOP front desk', 'Panduan serah terima shift', 'Informasi membership dan fasilitas', 'Konten bahasa Inggris dan Indonesia'],
      liveLink: 'https://obsidian-frontoffice.netlify.app/', githubLink: 'https://github.com/bintangmogot/front-office-app', isPrivate: true,
    },
    {
      id: 'bajetku', year: '2026', madeAt: 'Personal', navTitle: 'Personal finance',
      title: 'Bajetku — Personal Finance Tracker', category: 'Others', isPersonal: true,
      description: en ? 'A private finance tracker with transaction imports, Google Sheets storage, and configurable emergency-fund goals.' : 'Pencatat keuangan pribadi dengan impor transaksi, penyimpanan Google Sheets, dan target dana darurat yang dapat diatur.',
      techStack: ['Next.js', 'JavaScript', 'Google Sheets'],
      features: en ? ['Excel and CSV import review', 'Transaction tracking', 'Configurable emergency-fund target', 'Private access'] : ['Review impor Excel dan CSV', 'Pencatatan transaksi', 'Target dana darurat yang dapat diatur', 'Akses pribadi'],
      liveLink: '', githubLink: '', isPrivate: true,
    },
    {
      id: 'bintang-codes', year: '2026', madeAt: 'Personal', navTitle: 'Portfolio',
      title: 'Bintang Codes — Developer Portfolio', category: 'Others', isPersonal: true,
      status: en ? 'Live' : 'Aktif',
      description: en ? 'My developer portfolio, bringing project case studies, work experience, and freelance services together.' : 'Portofolio developer saya yang menyatukan studi kasus proyek, pengalaman kerja, dan layanan freelance.',
      techStack: ['Vue 3', 'Vite', 'Tailwind CSS'],
      features: en ? ['Bilingual portfolio', 'Project archive and detail panels', 'Responsive project showcase', 'Freelance service information'] : ['Portofolio bilingual', 'Arsip proyek dan panel detail', 'Showcase proyek responsif', 'Informasi layanan freelance'],
      liveLink: 'https://bintangcodes.com/', githubLink: 'https://github.com/bintangmogot/bintang-profile',
    },
    {
      id: 'staros', year: '2026', madeAt: 'Personal', navTitle: 'Automation',
      title: 'StarOS — Email-to-PR Automation', category: 'Others', isPersonal: true,
      status: en ? 'Local prototype' : 'Prototipe lokal',
      description: en ? 'A local automation prototype that routes approved email requests into repository work and reviewable pull requests.' : 'Prototipe otomasi lokal yang mengarahkan permintaan email yang disetujui ke pekerjaan repository dan pull request untuk ditinjau.',
      longDescription: en ? 'A local Node.js service designed to connect approved email requests with the correct repository, isolated coding work, checks, and reviewable pull requests.\n\nThe workflow keeps merge and deployment decisions under human control. Gmail arrival handling requires connection and activation; this is presented as a local prototype.' : 'Layanan Node.js lokal untuk menghubungkan permintaan email yang disetujui dengan repository yang tepat, pekerjaan coding terisolasi, pemeriksaan, dan pull request untuk ditinjau.\n\nKeputusan merge dan deployment tetap di tangan manusia. Penanganan email masuk memerlukan koneksi dan aktivasi Gmail; proyek ini ditampilkan sebagai prototipe lokal.',
      techStack: ['Node.js', 'JavaScript', 'IMAP', 'Git'],
      features: en ? ['Approved-request routing', 'Isolated repository work', 'Checks and reviewable pull requests', 'Human-controlled merge and deployment'] : ['Routing permintaan yang disetujui', 'Pekerjaan repository terisolasi', 'Pemeriksaan dan pull request', 'Merge dan deployment oleh manusia'],
      liveLink: '', githubLink: '', isPrivate: true,
    },
  ].map(project => ({ ...project, type: 'image', linkDisplay: project.liveLink ? new URL(project.liveLink).hostname : '', longDescription: project.longDescription || project.description, media: project.media || `/images/projects/${project.id}.svg` }));
};

const existingIds = {
  'capluk.mataquestudio.com': 'capluk', 'coachyohanes.com': 'coach-yohanes',
  'omahbuliek.page.gd': 'oemah-bu-liek', 'binaakhlakdigital.id': 'bina-akhlak',
  'paocoin.netlify.app': 'pao', 'greencoin-pied.vercel.app': 'green-wick',
  'xiaocoin.netlify.app': 'xiao', 'zencoin.netlify.app': 'zen',
  'amikomcenter.com': 'amikom', 'gitstraining.com': 'gits',
  'papuamultievent.com': 'papua', 'shirogym.vercel.app': 'shiro',
};

export const withThumbnail = project => {
  const id = project.id || existingIds[project.liveLink ? new URL(project.liveLink).hostname : ''];
  return { ...project, id, thumbnail: project.thumbnail || project.media || `/images/projects/${id}.svg` };
};
