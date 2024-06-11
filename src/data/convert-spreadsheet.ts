import { writeFile } from "fs";

import { readFile } from "xlsx";

import { countries, drivers, teams } from "./constants";
import type {
  Driver,
  Player,
  Race,
  RacePrediction,
  SprintRacePrediction,
  Team,
  WeekendPredictions,
} from "./types";

const {
  Sheets: { Input: sheet },
} = readFile("./F1 2024 Predictor.xlsx");

type DriverName =
  | "Verstappen"
  | "Perez"
  | "Russell"
  | "Hamilton"
  | "Leclerc"
  | "Sainz"
  | "Piastri"
  | "Norris"
  | "Stroll"
  | "Alonso"
  | "Ocon"
  | "Gasly"
  | "Albon"
  | "Sargeant"
  | "Ricciardo"
  | "Tsunoda"
  | "Bottas"
  | "Zhou"
  | "Magnussen"
  | "Hulkenberg";
const getDriverId = (
  driverName: DriverName | "-" | null,
): Driver["id"] | null => {
  if (!driverName || driverName === "-") return null;

  const mapping: Record<DriverName, Driver> = {
    Verstappen: drivers.maxVerstappen,
    Perez: drivers.sergioPerez,
    Russell: drivers.georgeRussell,
    Hamilton: drivers.lewisHamilton,
    Leclerc: drivers.charlesLeclerc,
    Sainz: drivers.carlosSainz,
    Piastri: drivers.oscarPiastri,
    Norris: drivers.landoNorris,
    Stroll: drivers.lanceStroll,
    Alonso: drivers.fernandoAlonso,
    Ocon: drivers.estebanOcon,
    Gasly: drivers.pierreGasly,
    Albon: drivers.alexanderAlbon,
    Sargeant: drivers.loganSargeant,
    Ricciardo: drivers.danielRicciardo,
    Tsunoda: drivers.yukiTsunoda,
    Bottas: drivers.valtteriBottas,
    Zhou: drivers.zhouGuanyu,
    Magnussen: drivers.kevinMagnussen,
    Hulkenberg: drivers.nicoHulkenberg,
  };

  return mapping[driverName].id;
};

type TeamName =
  | "Redbull"
  | "Mercedes"
  | "Alpine"
  | "Haas"
  | "Mclaren"
  | "Aston Martin"
  | "RB Cash App Visa"
  | "Ferrari"
  | "Kick Sauber"
  | "Williams";
const getTeamId = (teamName: TeamName | "-" | null): Team["id"] | null => {
  if (!teamName || teamName === "-") return null;

  const mapping: Record<TeamName, Team> = {
    Redbull: teams.redBull,
    Mercedes: teams.mercedes,
    Alpine: teams.alpine,
    Haas: teams.haas,
    Mclaren: teams.mclaren,
    "Aston Martin": teams.astonMartin,
    "RB Cash App Visa": teams.rB,
    Ferrari: teams.ferrari,
    "Kick Sauber": teams.kickSauber,
    Williams: teams.williams,
  };

  return mapping[teamName].id;
};

const players: Array<Player> = [];
const baseRaces: Array<Race> = [
  {
    id: 1,
    name: "Bahrain Grand Prix",
    circuitName: "Bahrain International Circuit",
    date: "2024-03-02T09:00:00.000Z",
    country: countries.bahrain,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 2,
    name: "Saudi Arabian Grand Prix",
    circuitName: "Jeddah Corniche Circuit",
    date: "2024-03-09T09:00:00.000Z",
    country: countries.saudiArabia,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 3,
    name: "Australian Grand Prix",
    circuitName: "Albert Park Circuit",
    date: "2024-03-24T09:00:00.000Z",
    country: countries.australia,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 4,
    name: "Japanese Grand Prix",
    circuitName: "Suzuka International Racing Course",
    date: "2024-04-07T09:00:00.000Z",
    country: countries.japan,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 5,
    name: "Chinese Grand Prix",
    circuitName: "Shanghai International Circuit",
    date: "2024-04-21T09:00:00.000Z",
    country: countries.china,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
    sprintRaceResult: {
      pole: null,
      first: null,
    },
  },
  {
    id: 6,
    name: "Miami Grand Prix",
    circuitName: "Miami International Autodrome",
    date: "2024-05-05T09:00:00.000Z",
    country: countries.unitedStates,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
    sprintRaceResult: {
      pole: null,
      first: null,
    },
  },
  {
    id: 7,
    name: "Emilia Romagna Grand Prix",
    circuitName: "Imola Circuit",
    date: "2024-05-19T09:00:00.000Z",
    country: countries.italy,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 8,
    name: "Monaco Grand Prix",
    circuitName: "Circuit de Monaco",
    date: "2024-05-26T09:00:00.000Z",
    country: countries.monaco,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 9,
    name: "Canadian Grand Prix",
    circuitName: "Circuit Gilles Villeneuve",
    date: "2024-06-09T09:00:00.000Z",
    country: countries.canada,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 10,
    name: "Spanish Grand Prix",
    circuitName: "Circuit de Barcelona-Catalunya",
    date: "2024-06-23T09:00:00.000Z",
    country: countries.spain,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 11,
    name: "Austrian Grand Prix",
    circuitName: "Red Bull Ring",
    date: "2024-06-30T09:00:00.000Z",
    country: countries.austria,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
    sprintRaceResult: {
      pole: null,
      first: null,
    },
  },
  {
    id: 12,
    name: "British Grand Prix",
    circuitName: "Silverstone Circuit",
    date: "2024-07-07T09:00:00.000Z",
    country: countries.unitedKingdom,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 13,
    name: "Hungarian Grand Prix",
    circuitName: "Hungaroring",
    date: "2024-07-21T09:00:00.000Z",
    country: countries.hungary,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 14,
    name: "Belgian Grand Prix",
    circuitName: "Circuit de Spa-Francorchamps",
    date: "2024-07-28T09:00:00.000Z",
    country: countries.belgium,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 15,
    name: "Dutch Grand Prix",
    circuitName: "Circuit Zandvoort",
    date: "2024-08-25T09:00:00.000Z",
    country: countries.netherlands,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 16,
    name: "Italian Grand Prix",
    circuitName: "Monza Circuit",
    date: "2024-09-01T09:00:00.000Z",
    country: countries.italy,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 17,
    name: "Azerbaijan Grand Prix",
    circuitName: "Baku City Circuit",
    date: "2024-09-15T09:00:00.000Z",
    country: countries.azerbaijan,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 18,
    name: "Singapore Grand Prix",
    circuitName: "Marina Bay Street Circuit",
    date: "2024-09-22T09:00:00.000Z",
    country: countries.singapore,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 19,
    name: "United States Grand Prix",
    circuitName: "Circuit of the Americas",
    date: "2024-10-20T09:00:00.000Z",
    country: countries.unitedStates,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
    sprintRaceResult: {
      pole: null,
      first: null,
    },
  },
  {
    id: 20,
    name: "Mexico City Grand Prix",
    circuitName: "Autódromo Hermanos Rodríguez",
    date: "2024-10-27T09:00:00.000Z",
    country: countries.mexico,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 21,
    name: "São Paulo Grand Prix",
    circuitName: "Interlagos Circuit",
    date: "2024-11-03T09:00:00.000Z",
    country: countries.brazil,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
    sprintRaceResult: {
      pole: null,
      first: null,
    },
  },
  {
    id: 22,
    name: "Las Vegas Grand Prix",
    circuitName: "Las Vegas Strip Circuit",
    date: "2024-11-023T09:00:00.000Z",
    country: countries.unitedStates,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
  {
    id: 23,
    name: "Qatar Grand Prix",
    circuitName: "Lusail International Circuit",
    date: "2024-12-01T09:00:00.000Z",
    country: countries.qatar,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
    sprintRaceResult: {
      pole: null,
      first: null,
    },
  },
  {
    id: 24,
    name: "Abu Dhabi Grand Prix",
    circuitName: "Yas Marina Circuit",
    date: "2024-12-08T09:00:00.000Z",
    country: countries.abuDhabi,
    status: "upcoming",
    result: {
      pole: null,
      first: null,
      last: null,
      fastestLap: null,
      fastestPitStop: null,
    },
  },
];

const columns = [
  "E",
  "G",
  "I",
  "K",
  "M",
  "O",
  "Q",
  "S",
  "U",
  "W",
  "Y",
  "AA",
  "AC",
  "AE",
  "AG",
  "AI",
  "AK",
];

// designates the row to fetch the cell values from
// after each race, this is incremented by:
// - 7 (sprint weekend)
// or
// - 5 (non-sprint weekend)
let offset = 4;

const races = baseRaces.map((race) => {
  const updatedRace = { ...race };

  let sprintWeekend = false;

  let currentRow = 0;

  const getResult = <T extends DriverName | TeamName>(): T | null => {
    return sheet[`D${offset + currentRow++}`]?.v ?? null;
  };

  if (race.sprintRaceResult) {
    updatedRace.sprintRaceResult = {
      pole: getDriverId(getResult<DriverName>()),
      first: getDriverId(getResult<DriverName>()),
    };
  }

  updatedRace.result = {
    pole: getDriverId(getResult<DriverName>()),
    first: getDriverId(getResult<DriverName>()),
    fastestPitStop: getTeamId(getResult<TeamName>()),
    fastestLap: getDriverId(getResult<DriverName>()),
    last: getDriverId(getResult<DriverName>()),
  };

  if (updatedRace.result.first) {
    updatedRace.status = "completed";
  }

  columns.forEach((column, columnIndex) => {
    let currentRow = 0;

    // returns the value of the row and increments the counter
    // so that the next getRowValue() call gets the next row
    const getPrediction = <T extends DriverName | TeamName>(): T | null => {
      return sheet[`${column}${offset + currentRow++}`]?.v ?? null;
    };

    const weekendPredictions: WeekendPredictions = {
      racePrediction: {
        pole: null,
        first: null,
        fastestPitStop: null,
        fastestLap: null,
        last: null,
      },
    };

    if (race.sprintRaceResult) {
      sprintWeekend = true;

      weekendPredictions.sprintRacePrediction = {
        pole: getDriverId(getPrediction<DriverName>()),
        first: getDriverId(getPrediction<DriverName>()),
      };
    }

    weekendPredictions.racePrediction = {
      pole: getDriverId(getPrediction<DriverName>()),
      first: getDriverId(getPrediction<DriverName>()),
      fastestPitStop: getTeamId(getPrediction<TeamName>()),
      fastestLap: getDriverId(getPrediction<DriverName>()),
      last: getDriverId(getPrediction<DriverName>()),
    };

    if (players[columnIndex]) {
      players[columnIndex].predictions[race.id] = weekendPredictions;
    } else {
      players.push({
        id: ++columnIndex,
        name: sheet[`${column}2`].v,
        points: 0,
        predictions: {
          [race.id]: weekendPredictions,
        },
      });
    }
  });

  offset += sprintWeekend ? 7 : 5;

  return updatedRace;
});

players.forEach((player, playerIndex) => {
  let points = 0;

  Object.entries(player.predictions).forEach(([raceId, predictions]) => {
    let pointsForRace = 0;

    const pointsToAdd: Record<keyof RacePrediction, number> = {
      pole: 5,
      first: 5,
      fastestPitStop: 5,
      fastestLap: 10,
      last: 10,
    };

    const { result, sprintRaceResult } = races.find(
      (race) => race.id.toString() === raceId,
    ) as Race;

    Object.entries(predictions.racePrediction).forEach(
      ([key, racePrediction]) => {
        const predictionType = key as keyof RacePrediction;
        const res = result[predictionType];

        if (!res) return;

        if (res === racePrediction) {
          pointsForRace += pointsToAdd[predictionType];
        }
      },
    );

    // give bonus points for all 5 correct race predictions
    if (
      pointsForRace === Object.values(pointsToAdd).reduce((a, b) => a + b, 0)
    ) {
      pointsForRace += 5;
    }

    if (predictions.sprintRacePrediction && sprintRaceResult) {
      Object.entries(predictions.sprintRacePrediction).forEach(
        ([key, sprintRacePrediction]) => {
          const predictionType = key as keyof SprintRacePrediction;
          const res = sprintRaceResult[predictionType];

          if (!res) return;

          if (res === sprintRacePrediction) {
            points += pointsToAdd[predictionType];
          }
        },
      );
    }

    points += pointsForRace;
  });

  players[playerIndex].points = points;
});

writeFile(
  "../data/players.ts",
  `
  import type { Player } from "@/data/types";

  export const players: Array<Player> = ${JSON.stringify(players)}
  `,
  () => {},
);

writeFile(
  "../data/races.ts",
  `
  import type { Race } from "@/data/types";

  export const races: Array<Race> = ${JSON.stringify(races)}
  `,
  () => {},
);
