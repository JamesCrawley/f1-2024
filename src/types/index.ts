export type DriverId =
  | "maxVerstappen"
  | "sergioPerez"
  | "charlesLeclerc"
  | "carlosSainz"
  | "georgeRussell"
  | "lewisHamilton"
  | "landoNorris"
  | "oscarPiastri"
  | "fernandoAlonso"
  | "lanceStroll"
  | "zhouGuanyu"
  | "valtteriBottas"
  | "kevinMagnussen"
  | "nicoHulkenberg"
  | "danielRicciardo"
  | "yukiTsunoda"
  | "alexanderAlbon"
  | "loganSargeant"
  | "estebanOcon"
  | "pierreGasly";
type DriverName =
  | "Max Verstappen"
  | "Sergio Perez"
  | "Charles Leclerc"
  | "Carlos Sainz"
  | "George Russell"
  | "Lewis Hamilton"
  | "Lando Norris"
  | "Oscar Piastri"
  | "Fernando Alonso"
  | "Lance Stroll"
  | "Zhou Guanyu"
  | "Valtteri Bottas"
  | "Kevin Magnussen"
  | "Nico Hulkenberg"
  | "Daniel Ricciardo"
  | "Yuki Tsunoda"
  | "Alexander Albon"
  | "Logan Sargeant"
  | "Esteban Ocon"
  | "Pierre Gasly";

export type TeamId =
  | "redBull"
  | "ferrari"
  | "mercedes"
  | "mclaren"
  | "astonMartin"
  | "kickSauber"
  | "haas"
  | "rB"
  | "williams"
  | "alpine";
type TeamName =
  | "Red Bull"
  | "Ferrari"
  | "Mercedes"
  | "Mclaren"
  | "Aston Martin"
  | "Kick Sauber"
  | "Haas"
  | "RB"
  | "Williams"
  | "Alpine";

export type CountryId =
  | "austria"
  | "italy"
  | "germany"
  | "unitedKingdom"
  | "switzerland"
  | "unitedStates"
  | "france";
type CountryName =
  | "Austria"
  | "Italy"
  | "Germany"
  | "United Kingdom"
  | "Switzerland"
  | "United States"
  | "France";

export type Country = {
  id: CountryId;
  name: CountryName;
};

export type Team = {
  id: TeamId;
  name: TeamName;
  country: Country;
};

export type Driver = {
  id: DriverId;
  name: DriverName;
  // country: Country;
  team: Team;
};
