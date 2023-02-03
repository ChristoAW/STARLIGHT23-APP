const listDivisi = [

  {
    name: 'POSEIDON',
    link: '',
  },
  {
    name: 'SIRENS',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSd0dQaconGO8AibVz06oxONl-0deRrKWzgRF9YY7tKzATYFjQ/viewform?usp=sharing',
  },
  { name: 'CIRCE', link: 'https://forms.gle/jvBGLctuce7UJYY76' },
  {
    name: 'NAIADS',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSd0dQaconGO8AibVz06oxONl-0deRrKWzgRF9YY7tKzATYFjQ/viewform?usp=sharing',
  },
  {
    name: 'CHARYBDIS',
    link: 'https://docs.google.com/forms/d/1J4QogJ_X3sM_u_ddRO7AzAPZpjSWQ5xmhCdgwasUL90/edit?chromeless=1',
  },
  { name: 'CALYPSO', link: 'https://forms.gle/2edmZVuzmpkLez9Q9' },
  { name: 'HIPPOCAMPUS', link: 'https://forms.gle/ZsmzZJHBEFy3CqyQ6' },
  { name: 'KRAKEN', link: 'https://forms.gle/B2EYU5QS7iJJW9g39' },
  { name: 'LEVIATHAN', link: 'https://forms.gle/x7SByULMDV9y7u3M6' },
  { name: 'NEREUS', link: 'https://forms.gle/z9mKqqb289WmYmpX9' },
  { name: 'HYDRA', link: 'https://forms.gle/ENtiYAQ6fhsd4hGL8' },
  { name: 'CETEA', link: 'https://forms.gle/tq6rpXQKG2RxaxVt8' },
  {
    name: 'SCYLLA',
    link: 'https://docs.google.com/forms/d/1KZssg_lzAi7h28GGlz9-wZbhmf33i3cJD2IhyzqTD6A/edit?usp=drivesdk&chromeless=1',
  },
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
