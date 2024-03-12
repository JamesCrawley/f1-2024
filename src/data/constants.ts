export const countries = {
  austria: {
    id: "austria",
    name: "Austria",
  },
  italy: {
    id: "italy",
    name: "Italy",
  },
  germany: {
    id: "germany",
    name: "Germany",
  },
  unitedKingdom: {
    id: "unitedKingdom",
    name: "United Kingdom",
  },
  switzerland: {
    id: "switzerland",
    name: "Switzerland",
  },
  unitedStates: {
    id: "unitedStates",
    name: "United States",
  },
  france: {
    id: "france",
    name: "France",
  },
  bahrain: {
    id: "bahrain",
    name: "Bahrain",
  },
  saudiArabia: {
    id: "saudiArabia",
    name: "Saudi Arabia",
  },
  australia: {
    id: "australia",
    name: "Australia",
  },
  japan: {
    id: "japan",
    name: "Japan",
  },
  china: {
    id: "china",
    name: "China",
  },
  monaco: {
    id: "monaco",
    name: "Monaco",
  },
  canada: {
    id: "canada",
    name: "Canada",
  },
  spain: {
    id: "spain",
    name: "Spain",
  },
  hungary: {
    id: "hungary",
    name: "Hungary",
  },
  belgium: {
    id: "belgium",
    name: "Belgium",
  },
  netherlands: {
    id: "netherlands",
    name: "Netherlands",
  },
  azerbaijan: {
    id: "azerbaijan",
    name: "Azerbaijan",
  },
  singapore: {
    id: "singapore",
    name: "Singapore",
  },
  mexico: {
    id: "mexico",
    name: "Mexico",
  },
  brazil: {
    id: "brazil",
    name: "Brazil",
  },
  qatar: {
    id: "qatar",
    name: "Qatar",
  },
  abuDhabi: {
    id: "abuDhabi",
    name: "Abu Dhabi",
  },
} as const;

export const teams = {
  redBull: {
    id: "redBull",
    name: "Red Bull",
    country: countries.austria,
  },
  ferrari: {
    id: "ferrari",
    name: "Ferrari",
    country: countries.italy,
  },
  mercedes: {
    id: "mercedes",
    name: "Mercedes",
    country: countries.germany,
  },
  mclaren: {
    id: "mclaren",
    name: "Mclaren",
    country: countries.unitedKingdom,
  },
  astonMartin: {
    id: "astonMartin",
    name: "Aston Martin",
    country: countries.unitedKingdom,
  },
  kickSauber: {
    id: "kickSauber",
    name: "Kick Sauber",
    country: countries.switzerland,
  },
  haas: {
    id: "haas",
    name: "Haas",
    country: countries.unitedStates,
  },
  rB: {
    id: "rB",
    name: "RB",
    country: countries.italy,
  },
  williams: {
    id: "williams",
    name: "Williams",
    country: countries.unitedKingdom,
  },
  alpine: {
    id: "alpine",
    name: "Alpine",
    country: countries.france,
  },
} as const;

export const drivers = {
  maxVerstappen: {
    id: "maxVerstappen",
    name: "Max Verstappen",
    // country: "",
    team: teams.redBull,
  },
  sergioPerez: {
    id: "sergioPerez",
    name: "Sergio Perez",
    // country: "",
    team: teams.redBull,
  },
  charlesLeclerc: {
    id: "charlesLeclerc",
    name: "Charles Leclerc",
    // country: "",
    team: teams.ferrari,
  },
  carlosSainz: {
    id: "carlosSainz",
    name: "Carlos Sainz",
    // country: "",
    team: teams.ferrari,
  },
  georgeRussell: {
    id: "georgeRussell",
    name: "George Russell",
    // country: "",
    team: teams.mercedes,
  },
  lewisHamilton: {
    id: "lewisHamilton",
    name: "Lewis Hamilton",
    // country: "",
    team: teams.mercedes,
  },
  landoNorris: {
    id: "landoNorris",
    name: "Lando Norris",
    // country: "",
    team: teams.mclaren,
  },
  oscarPiastri: {
    id: "oscarPiastri",
    name: "Oscar Piastri",
    // country: "",
    team: teams.mclaren,
  },
  fernandoAlonso: {
    id: "fernandoAlonso",
    name: "Fernando Alonso",
    // country: "",
    team: teams.astonMartin,
  },
  lanceStroll: {
    id: "lanceStroll",
    name: "Lance Stroll",
    // country: "",
    team: teams.astonMartin,
  },
  zhouGuanyu: {
    id: "zhouGuanyu",
    name: "Zhou Guanyu",
    // country: "",
    team: teams.kickSauber,
  },
  valtteriBottas: {
    id: "valtteriBottas",
    name: "Valtteri Bottas",
    // country: "",
    team: teams.kickSauber,
  },
  kevinMagnussen: {
    id: "kevinMagnussen",
    name: "Kevin Magnussen",
    // country: "",
    team: teams.haas,
  },
  nicoHulkenberg: {
    id: "nicoHulkenberg",
    name: "Nico Hulkenberg",
    // country: "",
    team: teams.haas,
  },
  danielRicciardo: {
    id: "danielRicciardo",
    name: "Daniel Ricciardo",
    // country: "",
    team: teams.rB,
  },
  yukiTsunoda: {
    id: "yukiTsunoda",
    name: "Yuki Tsunoda",
    // country: "",
    team: teams.rB,
  },
  alexanderAlbon: {
    id: "alexanderAlbon",
    name: "Alexander Albon",
    // country: "",
    team: teams.williams,
  },
  loganSargeant: {
    id: "loganSargeant",
    name: "Logan Sargeant",
    // country: "",
    team: teams.williams,
  },
  estebanOcon: {
    id: "estebanOcon",
    name: "Esteban Ocon",
    // country: "",
    team: teams.alpine,
  },
  pierreGasly: {
    id: "pierreGasly",
    name: "Pierre Gasly",
    // country: "",
    team: teams.alpine,
  },
} as const;
