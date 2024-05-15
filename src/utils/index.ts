import { races } from "@/data/races";
import type { Country } from "@/data/types";

export const getOrdinal = (n: number): string => {
  let ord = "th";

  if (n % 10 === 1 && n % 100 !== 11) {
    ord = "st";
  } else if (n % 10 === 2 && n % 100 !== 12) {
    ord = "nd";
  } else if (n % 10 === 3 && n % 100 !== 13) {
    ord = "rd";
  }

  return ord;
};

export const getCountryFlag = (id: Country["id"]): string => {
  switch (id) {
    case "austria":
      return "🇦🇹";
    case "italy":
      return "🇮🇹";
    case "germany":
      return "🇩🇪";
    case "unitedKingdom":
      return "🇬🇧";
    case "switzerland":
      return "🇨🇭";
    case "unitedStates":
      return "🇺🇸";
    case "france":
      return "🇫🇷";
    case "bahrain":
      return "🇧🇭";
    case "saudiArabia":
      return "🇸🇦";
    case "australia":
      return "🇦🇺";
    case "japan":
      return "🇯🇵";
    case "china":
      return "🇨🇳";
    case "monaco":
      return "🇲🇨";
    case "canada":
      return "🇨🇦";
    case "spain":
      return "🇪🇸";
    case "hungary":
      return "🇭🇺";
    case "belgium":
      return "🇧🇪";
    case "netherlands":
      return "🇳🇱";
    case "azerbaijan":
      return "🇦🇿";
    case "singapore":
      return "🇸🇬";
    case "mexico":
      return "🇲🇽";
    case "brazil":
      return "🇧🇷";
    case "qatar":
      return "🇶🇦";
    case "abuDhabi":
      return "🇦🇪";
  }
};

export const completedRaces = races.filter(
  ({ status }) => status === "completed" || status === "cancelled",
);

export const upcomingRaces = races.filter(
  ({ status }) => status === "upcoming",
);

export const inProgressRace = races.findLast(
  ({ status }) => status === "inProgress",
);
