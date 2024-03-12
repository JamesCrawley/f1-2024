import { writeFile } from "fs";

import { readFile } from "xlsx";

import { drivers, races, teams } from "../constants";
import type { Driver, Player, Predictions, Team } from "../types";

const {
  Sheets: { Races: sheet },
} = readFile("./F1 2024 Predictor.xlsx");

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
const getDriverId = (driverName: DriverName | null): Driver["id"] | null => {
  if (!driverName) return null;

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
const getTeamId = (teamName: TeamName | null): Team["id"] | null => {
  if (!teamName) return null;

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

const players: Array<Player> = columns.map((column, playerId) => {
  const playerName = sheet[`${column}2`].v;

  const predictions: Predictions = {};

  let currentRow = 3;

  races.forEach((race) => {
    // returns the value of the row and increments the counter
    // so that the next getRowValue() call gets the next row
    const getRowValue = <T extends DriverName | TeamName>(): T | null =>
      sheet[`${column}${++currentRow}`]?.v ?? null;

    const pole = getRowValue<DriverName>();
    const first = getRowValue<DriverName>();
    const fastestPitStop = getRowValue<TeamName>();
    const fastestLap = getRowValue<DriverName>();
    const last = getRowValue<DriverName>();

    predictions[race.id] = {
      racePrediction: {
        pole: getDriverId(pole),
        first: getDriverId(first),
        fastestPitStop: getTeamId(fastestPitStop),
        fastestLap: getDriverId(fastestLap),
        last: getDriverId(last),
      },
    };

    if (race.sprintResult) {
      const pole = getRowValue<DriverName>();
      const first = getRowValue<DriverName>();

      predictions[race.id].sprintRacePrediction = {
        pole: getDriverId(pole),
        first: getDriverId(first),
      };
    }
  });

  return {
    id: playerId,
    name: playerName,
    points: 0, // TODO:
    predictions,
  };
});

writeFile(
  "../data/players.ts",
  `
  import type { Player } from "@/types";

  export const players: Player[] = ${JSON.stringify(players)}
  `,
  () => {},
);
