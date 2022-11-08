import { Container, Button, Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example
        </Typography>
        <Button variant="contained" color="primary" >Test</Button>
        <LoadingButton
          loading={true}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Save
        </LoadingButton>

      </Box>
    </Container>
  );
}

export default App;
