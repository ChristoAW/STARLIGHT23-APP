const listDivisi = [
  { name: 'POSEIDON', link: '' },
  {
    name: 'SIRENS',
    link: 'https://forms.gle/h96U2s9qztsvdQ3H9',
    members: [
      'Kenneth Wilbert S',
      'Vincent Alexander',
      'Jesselyn Natania',
      'Janice Auryn',
      'Celica',
      'Chelsea Valencia Chairil',
      'Eunike Ardaya Pradipta Rukma',
      'Felicia Grainne',
      'Stevani',
      'Clarissa Beatrice',
    ],
  },
  {
    name: 'CIRCE',
    link: 'https://forms.gle/jvBGLctuce7UJYY76',
    members: [
      'Sesilia Brenda',
      'Natania Angela',
      'Ivan Satria',
      'Angelia Sean',
      'Jose Armando Christian',
      'Cecillia Muliawan',
      'Keisha Nathanie',
      'Aurellia Ellin Ko',
      'Felicia Viana Lim',
      'Vallerie Ophelia Chavella',
      'Eveline',
      'Christabel Orleans Setiaji Adiwana',
    ],
  },
  {
    name: 'NAIADS',
    link: 'https://forms.gle/Zp42F3XDwnebNbob6',
    members: [
      'Evi Febriyanti',
      'Elvia Phedha Virajayo',
      'Owen Montana',
      'Elmo Chang You Shen',
      'Frederico Jonathan Baguna',
      'Eunike Diva Yusuf',
      'Fulgentius Filbert Suryawan',
      'Enna Fiesta',
      'Yohanes Govinda Agarota',
      'Sakti Yudha Pratama',
      'Alexander',
    ],
  },
  {
    name: 'CHARYBDIS',
    link: 'https://forms.gle/mop7DaabwVZYv7169',
    members: [
      'Joy Reuben Christian',
      'Yosafat Benedictus Manik',
      'Ficelia Winata',
      'Aloysius Fidelio Wola',
      'Kevin Ernando',
      'Gilbert Stefanus Candra',
      'Graciell Syallom Zefanya Tjandra',
      'Nelson Efrata Aliwarga',
      'Hope Theophilus Soelaiman',
    ],
  },
  {
    name: 'CALYPSO',
    link: 'https://forms.gle/2edmZVuzmpkLez9Q9',
    members: [
      'Janice Stefani',
      'Kezia Filandi Wijaya',
      'Najwa Aulia',
      'Kenneth Welnysun',
      'Brilliana Thalia Wijaya',
    ],
  },
  {
    name: 'HIPPOCAMPUS',
    link: 'https://forms.gle/ZsmzZJHBEFy3CqyQ6',
    members: [
      'Brigitta Vania Maharani',
      'Vivian Regina Surya',
      'Valencia Antoinette',
      'Kenizyanadi Viede Putri Hananda',
      'Willy Wijaya Krisrena Cong',
      'Marcel Lim',
    ],
  },
  {
    name: 'KRAKEN',
    link: 'https://forms.gle/B2EYU5QS7iJJW9g39',
    members: [
      'Edlyn Louisa Wijaya',
      'Laura Novelia Pakpahan',
      'Rachel Manurung',
      'Reginald Ulysses Lorenzo. S',
      'Vanessa Angelica Hotama',
    ],
  },
  {
    name: 'LEVIATHAN',
    link: 'https://forms.gle/x7SByULMDV9y7u3M6',
    members: [
      'Amanda Candrasaputra',
      'Debora Esterlita',
      'Nicole Clement',
      'Novryan Susanto',
    ],
  },
  {
    name: 'NEREUS',
    link: 'https://forms.gle/z9mKqqb289WmYmpX9',
    members: [
      'Wahyu Dwi Setio Wibowo',
      'Damar Nur Rafly',
      'Valentino Mahardhika Putra',
      'Hans Philemon Limanza',
    ],
  },
  {
    name: 'HYDRA',
    link: 'https://forms.gle/ENtiYAQ6fhsd4hGL8',
    members: [
      'Calista Belva',
      'Alexander Bryan Triharja',
      'Felix Sanuel Leo',
      'Samuel Kurniawan Chandra',
    ],
  },
  {
    name: 'CETEA',
    link: 'https://forms.gle/tq6rpXQKG2RxaxVt8',
    members: [
      'Carissa Alexandra Geraldi',
      'Chintia Libby',
      'Aurell Vienca Yudhisti',
      'Felicia Alexandra',
      'Kidung Kirana Ardyanto',
      'Jeanne Annabelle Benz Pamungkas',
      'Jesslyn Angelina',
    ],
  },
  {
    name: 'SCYLLA',
    link: 'https://forms.gle/3jMAfuvKcHYrvQMw9',
    members: [
      'Jantzen Fernandez',
      'Grisvian Revaldo',
      'Valecia Monroe Thendy',
      'Aretha Thalia Putri',
      'Louis Rio Christiano',
      'Jessie Yenca Vegustin',
      'Angelica Michelle Sunarno',
      'Sayed Aqbil Ruhullya Muntazhar',
      'Tresya Meisel Adieputri',
      'Amelia Fathjria Anugrah Akbar',
      'Fabio',
      'Mario Susanto',
      'Davin Nathanael Ruslim',
    ],
  },
];

const loadImage = (entries) => {
  entries.map((entry) => {
    entry.logo =
      require(`@/asset/images/pages/recruitment/star/${entry.name}-Star.png`).default.src;
    entry.button =
      require(`@/asset/images/pages/recruitment/button/${entry.name}.png`).default.src;
    entry.popupd =
      require(`@/asset/images/pages/recruitment/popup/desktop/${entry.name}-min.png`).default.src;
    entry.popupdbg =
      require(`@/asset/images/pages/recruitment/popup/desktop/bg/${entry.name}-bg.png`).default.src;
    entry.popupm =
      require(`@/asset/images/pages/recruitment/popup/mobile/${entry.name}-mobile.png`).default.src;
    entry.popupmbg =
      require(`@/asset/images/pages/recruitment/popup/mobile/bg/${entry.name}-bg-m.png`).default.src;
  });
};

loadImage(listDivisi);

export default listDivisi;
