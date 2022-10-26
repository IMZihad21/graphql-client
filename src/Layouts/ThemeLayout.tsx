import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FC, PropsWithChildren } from "react";

const ThemeLayout: FC<PropsWithChildren> = ({ children }) => {
  // A custom theme for this app
  const theme = createTheme({
    // palette: {
    //   primary: {
    //       main: '#556cd6',
    //   },
    //   secondary: {
    //       main: '#19857b',
    //   },
    // },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeLayout;
