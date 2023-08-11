const RegistrationGroup = {
  stage_name: '',
  stage_desc: '',
  stage_equip: '',
  stage_music: '',

  contact_line: '',
  contact_phone: '',
  contact_email: '',
  contact_ig: '',
  n_performers: 2,

  members: [],
};

const RegistrationMember = {
  id_name: '',
  id_birthdate: '2000-01-01',
  id_domicile: '',
  id_institute: '',
  id_nim: '',
  img_photo: '',
  img_ktp: '',
  vaccine: '',

  files: {
    img_photo: null,
    img_ktp: null,
    vaccine: null,
  },
};

export { RegistrationGroup as groupState, RegistrationMember as memberState };
