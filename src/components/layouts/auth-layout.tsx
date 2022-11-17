import Box from '@mui/material/Box';
import grey from '@mui/material/colors/grey';
import red from '@mui/material/colors/red';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Suspense } from 'react';
import { Link as LinkRouter, Outlet } from 'react-router-dom';

//need to use module augmentation for the theme to accept the extra values.
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  status: {
    danger: red[500],
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => `
        body {
          background: ${grey[100]};
        }
      `,
    },
  },
});

const AuthLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Link component={LinkRouter} to="/" sx={{ flexGrow: 1, fontSize: '1rem', padding: '10px' }}>
          React Dashboard
        </Link>
      </Box>
      <main>
        {children ? children :
          (
            <Suspense fallback={<></>}>
              <Outlet />
            </Suspense>
          )}
      </main>
    </ThemeProvider>
  );
}

export default AuthLayout;
