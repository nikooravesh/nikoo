import React from 'react';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

// --------------------------------------------------

const cardData = [
  {
    img: `${process.env.PUBLIC_URL}/DentaScreen.png`,
    title: 'DENTA GeoBI (Demo Version)',
    description:
      'Developed for macro management (chain markets, mass producers, agricultural industries, real estate, organizations, and private companies across various fields).',
    authors: [
      { name: 'Next.js', avatar: `${process.env.PUBLIC_URL}/icons/Next.svg` },
      { name: 'Node.js', avatar: `${process.env.PUBLIC_URL}/icons/Node.svg` },
      { name: 'Openlayers', avatar: `${process.env.PUBLIC_URL}/icons/OpenLayers.svg` },
    ],
  },
];

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

function Author({ authors }: { authors: { name: string; avatar: string }[] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar key={index} alt={author.name} src={author.avatar} sx={{ width: 24, height: 24 }} />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      {/* <Typography variant="caption">Crated</Typography> */}
    </Box>
  );
}

const Projects: React.FC = () => {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);
  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };
  const handleBlur = () => {
    setFocusedCardIndex(null);
  };
  const handleCardClick = () => {
    window.open('https://www.linkedin.com/posts/nikooravesh_webgis-gis-geobi-activity-7287220475586375680-mlha?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8kkgBnJmBVuqxrD90yW4PS3xIdgw3_YM', '_blank');
  };

  return (
    <Box sx={{ pb: {xs: 20, sm: 30} }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column' },
          alignItems: 'center',
          pb: 8,
          width: '100%',
        }}
      >
        <Typography variant="h3" component="h3" sx={{ fontWeight: 700, pb: 1.5 }}>
          Project
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.05rem' }}>
          Some of the projects I have participated in
        </Typography>
      </Box>
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} md={8} key={index} sx={{ mx: { xs: 3.6, sm:0 } }}>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === index ? 'Mui-focused' : ''}
              sx={{ height: '100%' }}
              onClick={handleCardClick}
            >
              <CardMedia
                component="img"
                alt={card.title}
                image={card.img}
                sx={{
                  height: { sm: 'auto', md: '85%' },
                  aspectRatio: { sm: '', md: '' },
                }}
              />
              <SyledCardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {card.title}
                </Typography>
                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                  {card.description}
                </StyledTypography>
              </SyledCardContent>
              <Author authors={card.authors} />
            </SyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;