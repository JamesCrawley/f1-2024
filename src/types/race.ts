import { Country, Driver, Team } from "@/types";

export type RaceStatus = "completed" | "inProgress" | "upcoming" | "cancelled";
export type Race = {
  id: number;
  name: string;
  circuitName: string;
  date: Date;
  country: Country;
  status: RaceStatus;
  result: {
    pole: Driver | null;
    first: Driver | null;
    last: Driver | null;
    fastestLap: Driver | null;
    fastestPitStop: Team | null;
  };
  sprintResult?: {
    pole: Driver | null;
    first: Driver | null;
  };
};
