import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/system/Container';
import { ReactComponent as Image404 } from 'src/assets/img/404-error.svg';

export default function Error404() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
      }}
    >
      <div id="error-page">
        <Typography align='center' variant='h3' component='h2'>Page not found!</Typography>
        <Typography align='center' variant='h6'>Sorry, we couldn’t find the page you’re looking for.
          Perhaps you’ve mistyped the URL? <br />
          Be sure to check your spelling.</Typography>
        <Container maxWidth="sm">
          <Image404 />
        </Container>
      </div>
    </Box>
  );
}
