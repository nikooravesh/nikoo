import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// --------------------------------------------------

export default function Footer() {
  return (
    <React.Fragment>
      
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 6, sm: 8 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            pt: { xs: 4, sm: 8 },
            width: '100%',
          }}
        >
          <div>
            <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.8 }}>
            © 2025 Created By 
              &nbsp;•&nbsp; <Link color="text.secondary" variant="body2" href="https://nikoo.me/" sx={{ fontWeight: '700' }} >nikoo</Link> &nbsp;•&nbsp;
            </Typography>
            <Typography sx={{ mx: 0.5, opacity: 0.8 }}></Typography>
            <Typography sx={{ display: 'inline',mx: 0.5, opacity: 0.8 }}>Under MIT License & Globe sourced from</Typography>
            <Link color="text.secondary" variant="body2" href="https://www.mapbox.com/" target="_blank" rel="noopener">
              MapBox
            </Link>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
