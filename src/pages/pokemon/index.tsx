import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const cards = [1, 2, 3, 4];

export default function Pokemon() {
  const [searchText, setSearchText] = useState<string>('');
  const [clearSearchText, setClearSearchText] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [parentAnchorEl, setParentAnchorEl] = useState<HTMLElement | null>(null);

  const trackText = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setClearSearchText(true)
    } else {
      setClearSearchText(false)
    }

    setSearchText(event.target.value)
  }

  const clearSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSearchText('')
    setClearSearchText(false)
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setParentAnchorEl(event.currentTarget.parentElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      searchText: data.get('searchText'),
    });
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: '#eceff1',
          pt: 3,
          pb: 6,
        }}
      >
        <Container maxWidth="sm"
          sx={{
            pt: 2,
            pb: 6,
          }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Search
          </Typography>

          <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{ p: '2px 4px', marginTop: 5, display: 'flex', alignItems: 'center' }}
          >
            <IconButton sx={{ p: '10px' }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{
                marginLeft: {
                  lg: '-5px',
                }
              }}
              MenuListProps={{
                "aria-labelledby": "basic-button",
                sx: { width: parentAnchorEl && parentAnchorEl.offsetWidth } // <-- width of parent form
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search ..."
              inputProps={{ 'aria-label': 'search ...' }}
              onChange={trackText}
              value={searchText}
              name="searchText"
            />

            {clearSearchText && <>
              <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={clearSearch}>
                <ClearIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </>}

            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Container>
      </Box>

      <Container sx={{ py: 2 }} maxWidth="lg">
        <Grid container spacing={2}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the
                    content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}