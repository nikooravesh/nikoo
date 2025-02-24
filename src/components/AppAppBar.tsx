import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../theme/ColorModeIconDropdown';
import Sitemark from './SitemarkIcon';

// --------------------------------------------------

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
  '& .active': {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
}));

const AppAppBar = () => {
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  const handleScroll = (id: string, offset: number = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  React.useEffect(() => {
    const sections = ['about', 'videos', 'experience', 'projects', 'contact'];
    // const observers: IntersectionObserver[] = [];

    const checkActiveSection = () => {
      let active = null;
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            active = section;
          }
        }
      });
      setActiveSection(active);
    };

    // اضافه کردن event listener برای اسکرول
    window.addEventListener('scroll', checkActiveSection);

    // تمیز کردن event listener هنگام unmount
    return () => {
      window.removeEventListener('scroll', checkActiveSection);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => handleScroll('about', 120)}
                className={activeSection === 'about' ? 'active' : ''}
              >
                About
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => handleScroll('videos', 140)}
                className={activeSection === 'videos' ? 'active' : ''}
              >
                Videos
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => handleScroll('experience', 230)}
                className={activeSection === 'experience' ? 'active' : ''}
              >
                Experience
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => handleScroll('projects', 120)}
                className={activeSection === 'projects' ? 'active' : ''}
              >
                Projects
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={{ minWidth: 0 }}
                onClick={() => handleScroll('contact', 120)}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contact
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button color="primary" variant="contained" size="small">
              Blog
            </Button>
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem onClick={() => handleScroll('about', 80)}>
                  About
                </MenuItem>
                <MenuItem onClick={() => handleScroll('videos', 80)}>
                  Videos
                </MenuItem>
                <MenuItem onClick={() => handleScroll('experience', 80)}>
                  Experience
                </MenuItem>
                <MenuItem onClick={() => handleScroll('projects', 80)}>
                  Projects
                </MenuItem>
                <MenuItem onClick={() => handleScroll('contact', 80)}>
                  Contact
                </MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Blog
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default AppAppBar;