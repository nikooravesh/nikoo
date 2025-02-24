import React from 'react';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import MicIcon from '@mui/icons-material/Mic';
import YouTube from '@mui/icons-material/YouTube';

// --------------------------------------------------

const cardData = [
  {
    img: `${process.env.PUBLIC_URL}/Geoserver.png`,
    tag: 'YouTube',
    title: 'GeoServer Tutorial',
    lang: 'Persian',
    description:
      'From installation to use of the GeoServer service in interactive web maps and GIS applications.',
    authors: [{ name: 'Mohammad Nikooravesh', avatar: `${process.env.PUBLIC_URL}/NR.jpg`, date: 'May 07, 2025' }],
    link: '',
  },
  {
    img: `${process.env.PUBLIC_URL}/Routing.png`,
    tag: 'YouTube',
    title: 'Basic Routing By DataBase',
    lang: 'Persian',
    description:
      'Practical training in basic routing with various tools in spatial databases. (With a simple Application)',
    authors: [
      { name: 'Mohammad Nikooravesh', avatar: `${process.env.PUBLIC_URL}/NR.jpg`, date: 'Mar 18, 2025' },
    ],
    link: '',
  },
  {
    img: `${process.env.PUBLIC_URL}/GEEAPIinWebGIS.png`,
    tag: 'YouTube',
    title: 'GEE API in WebGIS',
    lang: 'Persian',
    description:
      'Harnessing the Power of Google Earth Engine: A Comprehensive Guide to Fetching and Visualizing Environmental Data in WebGIS',
    authors: [{ name: 'Mohammad Nikooravesh', avatar: `${process.env.PUBLIC_URL}/NR.jpg`, date: 'July 20, 2025' }],
    link: '',
  }
];

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  position: 'relative',
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
  WebkitLineClamp: 4,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const StyledOverlay = styled(Box)({
  position: 'absolute',
  top: 10,
  left: 10,
  backgroundColor: 'hsla(0, 0.00%, 100.00%, 0.32)',
  border: '1px solidrgba(172, 178, 189, 0.4)',
  color: 'hsl(210, 100%, 16%)',
  padding: '4px 8px 4px 2px;',
  borderRadius: '5px',
  fontSize: '0.775rem',
  fontWeight: 700
});

function Author({ authors }: { authors: { name: string; avatar: string; date: string; }[] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
        paddingTop: 0,
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
      <Typography variant="caption">{authors.map((author) => author.date).join(', ')}</Typography>
    </Box>
  );
}

const Videos: React.FC = () => {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);
  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };
  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  return (
    <Box sx={{ pb: { xs: 20, sm: 30 } }}>
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
          Videos
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.05rem' }}>
          Sample Video tutorials made by me
        </Typography>
      </Box>
      <Grid container spacing={5}>
        {cardData.map((card, index) => (
          <Grid item xs={12} md={4} key={index} sx={{ mx: { xs: 3.6, sm: 0 } }}>
            <a href={card.link} target="_blank" rel="noopener noreferrer" color="inherit" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <SyledCard
                variant="outlined"
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === index ? 'Mui-focused' : ''}
                sx={{ height: '100%' }}
              >
                <CardMedia
                  component="img"
                  alt={card.title}
                  image={card.img}
                  sx={{
                    height: { sm: 'auto', md: 'auto' },
                    aspectRatio: { sm: '16 / 9', md: '' },
                  }}
                />
                <StyledOverlay sx={{ display: 'flex' }}>
                  <MicIcon sx={{ height: "1.2rem" }} />{card.lang}
                </StyledOverlay>
                <SyledCardContent>

                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <StyledTypography variant="body2" color="text.primary" gutterBottom sx={{ opacity: 0.7 }}>
                    {card.description}
                  </StyledTypography>
                </SyledCardContent>
                <Box gap={1.2} sx={{ px:2.3, display: 'inline-flex', marginBottom: -2 }}>
                  <Typography gutterBottom variant="caption" component="div" gap={0.625} sx={{ display: 'inline-flex', alignItems: 'center' }}>
                    <YouTube />{card.tag}
                  </Typography>
                </Box>
                <Author authors={card.authors} />
              </SyledCard>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Videos;