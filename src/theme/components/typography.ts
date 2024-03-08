import type { Components } from "@mui/material";

// 0.75rem = 12px
// 1rem    = 16px
// 1.25rem = 20px
// 1.5rem  = 24px
// 1.75rem = 28px
// 2rem    = 32px

export const MuiTypography: Components["MuiTypography"] = {
  defaultProps: {
    variant: "sm",
    fontFamily: "Lato",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  variants: [
    {
      props: { variant: "sm" },
      style: {
        fontSize: "1.5rem",
      },
    },
    {
      props: { variant: "md" },
      style: {
        fontSize: "3rem",
      },
    },
    {
      props: { variant: "lg" },
      style: {
        fontSize: "6rem",
      },
    },
  ],
};

// custom variants need to be added here
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    sm: true;
    md: true;
    lg: true;
  }
}
