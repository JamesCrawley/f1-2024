import { countries, teams, drivers, races } from "@/constants";

export type Country = (typeof countries)[keyof typeof countries];

export type Team = (typeof teams)[keyof typeof teams];

export type Driver = (typeof drivers)[keyof typeof drivers];
