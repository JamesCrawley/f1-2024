import type { Race } from "@/data/types";

export const races: Array<Race> = [
  {
    id: 1,
    name: "Bahrain Grand Prix",
    circuitName: "Bahrain International Circuit",
    date: "2024-03-02T09:00:00.000Z",
    country: { id: "bahrain", name: "Bahrain" },
    status: "completed",
    result: {
      pole: "maxVerstappen",
      first: "maxVerstappen",
      fastestPitStop: "ferrari",
      fastestLap: "maxVerstappen",
      last: "loganSargeant",
    },
  },
  {
    id: 2,
    name: "Saudi Arabian Grand Prix",
    circuitName: "Jeddah Corniche Circuit",
    date: "2024-03-09T09:00:00.000Z",
    country: { id: "saudiArabia", name: "Saudi Arabia" },
    status: "completed",
    result: {
      pole: "maxVerstappen",
      first: "maxVerstappen",
      fastestPitStop: "redBull",
      fastestLap: "charlesLeclerc",
      last: "zhouGuanyu",
    },
  },
  {
    id: 3,
    name: "Australian Grand Prix",
    circuitName: "Albert Park Circuit",
    date: "2024-03-24T09:00:00.000Z",
    country: { id: "australia", name: "Australia" },
    status: "completed",
    result: {
      pole: "maxVerstappen",
      first: "carlosSainz",
      fastestPitStop: "redBull",
      fastestLap: "charlesLeclerc",
      last: "georgeRussell",
    },
  },
  {
    id: 4,
    name: "Japanese Grand Prix",
    circuitName: "Suzuka International Racing Course",
    date: "2024-04-07T09:00:00.000Z",
    country: { id: "japan", name: "Japan" },
    status: "completed",
    result: {
      pole: "maxVerstappen",
      first: "maxVerstappen",
      fastestPitStop: "redBull",
      fastestLap: "maxVerstappen",
      last: "loganSargeant",
    },
  },
  {
    id: 5,
    name: "Chinese Grand Prix",
    circuitName: "Shanghai International Circuit",
    date: "2024-04-21T09:00:00.000Z",
    country: { id: "china", name: "China" },
    status: "completed",
    result: {
      pole: "maxVerstappen",
      first: "maxVerstappen",
      fastestPitStop: "redBull",
      fastestLap: "fernandoAlonso",
      last: "loganSargeant",
    },
    sprintRaceResult: { pole: "landoNorris", first: "maxVerstappen" },
  },
  {
    id: 6,
    name: "Miami Grand Prix",
    circuitName: "Miami International Autodrome",
    date: "2024-05-05T09:00:00.000Z",
    country: { id: "unitedStates", name: "United States" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
    sprintRaceResult: { pole: null, first: null },
  },
  {
    id: 7,
    name: "Emilia Romagna Grand Prix",
    circuitName: "Imola Circuit",
    date: "2024-05-19T09:00:00.000Z",
    country: { id: "italy", name: "Italy" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
  },
  {
    id: 8,
    name: "Monaco Grand Prix",
    circuitName: "Circuit de Monaco",
    date: "2024-05-26T09:00:00.000Z",
    country: { id: "monaco", name: "Monaco" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
  },
  {
    id: 9,
    name: "Canadian Grand Prix",
    circuitName: "Circuit Gilles Villeneuve",
    date: "2024-06-09T09:00:00.000Z",
    country: { id: "canada", name: "Canada" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
  },
  {
    id: 10,
    name: "Spanish Grand Prix",
    circuitName: "Circuit de Barcelona-Catalunya",
    date: "2024-06-23T09:00:00.000Z",
    country: { id: "spain", name: "Spain" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
  },
  {
    id: 11,
    name: "Austrian Grand Prix",
    circuitName: "Red Bull Ring",
    date: "2024-06-30T09:00:00.000Z",
    country: { id: "austria", name: "Austria" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
    sprintRaceResult: { pole: null, first: null },
  },
  {
    id: 12,
    name: "British Grand Prix",
    circuitName: "Silverstone Circuit",
    date: "2024-07-07T09:00:00.000Z",
    country: { id: "unitedKingdom", name: "United Kingdom" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
  },
  {
    id: 13,
    name: "Hungarian Grand Prix",
    circuitName: "Hungaroring",
    date: "2024-07-21T09:00:00.000Z",
    country: { id: "hungary", name: "Hungary" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
  },
  {
    id: 14,
    name: "Belgian Grand Prix",
    circuitName: "Circuit de Spa-Francorchamps",
    date: "2024-07-28T09:00:00.000Z",
    country: { id: "belgium", name: "Belgium" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
  },
  {
    id: 15,
    name: "Dutch Grand Prix",
    circuitName: "Circuit Zandvoort",
    date: "2024-08-25T09:00:00.000Z",
    country: { id: "netherlands", name: "Netherlands" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
  },
  {
    id: 16,
    name: "Italian Grand Prix",
    circuitName: "Monza Circuit",
    date: "2024-09-01T09:00:00.000Z",
    country: { id: "italy", name: "Italy" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
  },
  {
    id: 17,
    name: "Azerbaijan Grand Prix",
    circuitName: "Baku City Circuit",
    date: "2024-09-15T09:00:00.000Z",
    country: { id: "azerbaijan", name: "Azerbaijan" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
  },
  {
    id: 18,
    name: "Singapore Grand Prix",
    circuitName: "Marina Bay Street Circuit",
    date: "2024-09-22T09:00:00.000Z",
    country: { id: "singapore", name: "Singapore" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
  },
  {
    id: 19,
    name: "United States Grand Prix",
    circuitName: "Circuit of the Americas",
    date: "2024-10-20T09:00:00.000Z",
    country: { id: "unitedStates", name: "United States" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
    sprintRaceResult: { pole: null, first: null },
  },
  {
    id: 20,
    name: "Mexico City Grand Prix",
    circuitName: "Autódromo Hermanos Rodríguez",
    date: "2024-10-27T09:00:00.000Z",
    country: { id: "mexico", name: "Mexico" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
  },
  {
    id: 21,
    name: "São Paulo Grand Prix",
    circuitName: "Interlagos Circuit",
    date: "2024-11-03T09:00:00.000Z",
    country: { id: "brazil", name: "Brazil" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
    sprintRaceResult: { pole: null, first: null },
  },
  {
    id: 22,
    name: "Las Vegas Grand Prix",
    circuitName: "Las Vegas Strip Circuit",
    date: "2024-11-023T09:00:00.000Z",
    country: { id: "unitedStates", name: "United States" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
  },
  {
    id: 23,
    name: "Qatar Grand Prix",
    circuitName: "Lusail International Circuit",
    date: "2024-12-01T09:00:00.000Z",
    country: { id: "qatar", name: "Qatar" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
    sprintRaceResult: { pole: null, first: null },
  },
  {
    id: 24,
    name: "Abu Dhabi Grand Prix",
    circuitName: "Yas Marina Circuit",
    date: "2024-12-08T09:00:00.000Z",
    country: { id: "abuDhabi", name: "Abu Dhabi" },
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      fastestPitStop: null,
      fastestLap: null,
      last: null,
    },
  },
];

export const completedRaces = races.filter(
  ({ status }) => status === "completed" || status === "cancelled",
);

export const upcomingRaces = races.filter(
  ({ status }) => status === "upcoming",
);

export const inProgressRace = races.findLast(
  ({ status }) => status === "inProgress",
);
