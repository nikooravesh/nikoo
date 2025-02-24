import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Globe from './Globe';
import About from './About';
import Videos from './Videos';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

// --------------------------------------------------

const MainContent = () => {
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const videosRef = React.useRef<HTMLDivElement>(null);
  const experienceRef = React.useRef<HTMLDivElement>(null);
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', py: { xs: 0, sm: 10 }, pb: { xs: 10, sm: 15 } }}>
        <Box sx={{ pb: 4, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
          <Box sx={{ width: { xs: '100%', sm: '40%' }, alignSelf: 'center' }}>
            <Globe />
          </Box>
        </Box>
        <div>
        <Typography variant="h1" gutterBottom>
            Mohammad Nikooravesh
          </Typography>
          <Typography variant="h3">GIS-Developer</Typography>
          <Typography>Surveying Engineer</Typography>
        </div>
      </Box>
      <Box ref={aboutRef} id="about">
        <About />
      </Box>
      <Box ref={videosRef} id="videos">
        <Videos />
      </Box>
      <Box ref={experienceRef} id="experience">
        <Experience />
      </Box>
      <Box ref={projectsRef} id="projects">
        <Projects />
      </Box>
      <Box ref={contactRef} id="contact">
        <Contact />
      </Box>
    </Box>
  );
};

export default MainContent;