import { createContext, FunctionComponent, Suspense, useMemo, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
// import useMediaQuery from '@mui/material/useMediaQuery';

interface BaseLayoutProps {
  children?: React.ReactNode;
}
const ColorModeContext = createContext({ toggleColorMode: () => { } });

const RootLayout: FunctionComponent<BaseLayoutProps> = ({ children }) => {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children ? children : (
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        )
        }
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default RootLayout;
