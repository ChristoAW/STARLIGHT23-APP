const listDivisi = [
  { name: 'POSEIDON', link: '' },
  { name: 'SIRENS', link: 'https://forms.gle/h96U2s9qztsvdQ3H9' },
  { name: 'CIRCE', link: 'https://forms.gle/jvBGLctuce7UJYY76' },
  { name: 'NAIADS', link: 'https://forms.gle/Zp42F3XDwnebNbob6' },
  { name: 'CHARYBDIS', link: 'https://forms.gle/mop7DaabwVZYv7169' },
  { name: 'CALYPSO', link: 'https://forms.gle/2edmZVuzmpkLez9Q9' },
  { name: 'HIPPOCAMPUS', link: 'https://forms.gle/ZsmzZJHBEFy3CqyQ6' },
  { name: 'KRAKEN', link: 'https://forms.gle/B2EYU5QS7iJJW9g39' },
  { name: 'LEVIATHAN', link: 'https://forms.gle/x7SByULMDV9y7u3M6' },
  { name: 'NEREUS', link: 'https://forms.gle/z9mKqqb289WmYmpX9' },
  { name: 'HYDRA', link: 'https://forms.gle/ENtiYAQ6fhsd4hGL8' },
  { name: 'CETEA', link: 'https://forms.gle/tq6rpXQKG2RxaxVt8' },
  { name: 'SCYLLA', link: 'https://forms.gle/3jMAfuvKcHYrvQMw9' },
];

const loadImage = (entries) => {
  entries.map((entry) => {
    entry.logo =
      require(`@/asset/images/pages/recruitment/star/${entry.name}-Star.png`).default.src;
    entry.button =
      require(`@/asset/images/pages/recruitment/button/${entry.name}.png`).default.src;
    entry.popup =
      require(`@/asset/images/pages/recruitment/popup/${entry.name}-min.png`).default.src;
  });
};

loadImage(listDivisi);

export default listDivisi;
