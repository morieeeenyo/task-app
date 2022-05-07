import { createTheme, ThemeProvider } from "@mui/material";

interface Props {
  children: React.ReactNode
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    },
  },
});

export const Theme = ({children}: Props) => {
  return (
    <ThemeProvider theme={customTheme}>
      {children}
    </ThemeProvider>
  )
}