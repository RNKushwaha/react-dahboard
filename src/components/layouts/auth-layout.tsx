import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const theme = createTheme();

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
        <Link href="/" sx={{ flexGrow: 1, fontSize: '1rem', padding: '10px' }}>
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
