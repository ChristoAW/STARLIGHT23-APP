const listMedia = [
  {
    name: 'Poseidon',
    type: 'sponsor',
		cat: 'high'
  },
  {
    name: 'Sirens',
    type: 'medpar',
		cat: 'high'
  },
  {
    name: 'Calypso',
    type: 'sponsor',
		cat: 'mid'
  },
  {
    name: 'Charybdis',
    type: 'medpar',
  },
  {
    name: 'Circe',
    type: 'medpar',
  },
  {
    name: 'Kraken',
    type: 'sponsor',
  },
  {
    name: 'Nereus',
    type: 'sponsor',
  },
  {
    name: 'Naiads',
    type: 'medpar',
  },
  {
    name: 'Scylla',
    type: 'medpar',
  },
];

const loadImage = (entries) => {
  entries.map((entry) => {
    {
      entry.type == 'sponsor'
        ? (entry.logo =
            require(`@/asset/images/pages/recruitment/star/${entry.name.toUpperCase()}-Star.png`).default.src)
        : (entry.logo =
					require(`@/asset/images/pages/recruitment/star/${entry.name.toUpperCase()}-Star.png`).default.src);
    }
  });
};

loadImage(listMedia);

export default listMedia;