import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GmailIcon from '../assets/social/Gmail.svg';
import SkypeIcon from '../assets/social/Skype.svg';
import SlackIcon from '../assets/social/Slack.svg';
import TeamsIcon from '../assets/social/Teams.svg';
import DiscordIcon from '../assets/social/Discord.svg';

// --------------------------------------------------

const About: React.FC = () => {
    const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
    const theme = useTheme();

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'column' },
                alignItems: 'center', 
                width: '100%', 
                px: { xs: 0, sm: 10 }
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column' }, alignItems: 'center', pb: 3, width: '100%' }}>
                <Typography variant="h3" component="h3" sx={{ fontWeight: 700, pb: 1.5 }}>
                    Contact
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.05rem', textAlign: 'center', lineHeight: 1.2 }}>
                    I welcome any ideas or comments you may have about my work.<br />
                    Please feel free to reach out to me through one of the following methods.
                </Typography>
            </Box>
            <Box sx={{ pb: 3}}>
                <img 
                    key='Contact' 
                    src={`${process.env.PUBLIC_URL}/cmodel/Contact2.svg`}
                    alt={`Contact`} 
                    style={{ 
                        width: '14rem',
                        height: 'auto',
                    }}
                />
            </Box>
            <Box>
                <Stack
                    direction="row"
                    spacing={1.5}
                    useFlexGap
                    sx={{ justifyContent: 'center', color: 'text.secondary' }}
                >
                    <Tooltip title="@nikooravesh" arrow>
                        <IconButton
                            color="inherit"
                            size={isSmallScreen ? 'medium' : 'large'}
                            href="https://github.com/nikooravesh"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            sx={{ alignSelf: 'center', color: theme.palette.text.primary }}
                        >
                            <GitHubIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="inikooravesh@gmail.com" arrow>
                        <IconButton
                            color="inherit"
                            size={isSmallScreen ? 'medium' : 'large'}
                            href="mailto:inikooravesh@gmail.com"
                            target="_blank"
                            aria-label="Gmail"
                            sx={{ alignSelf: 'center', color: theme.palette.text.primary }}
                        >
                            <img src={GmailIcon} alt="Gmail" style={{ width: '24px', height: '24px', filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="nikoo" arrow>
                        <IconButton
                            color="inherit"
                            size={isSmallScreen ? 'medium' : 'large'}
                            href="https://join.skype.com/invite/HZ45XRoG0Aq1"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Skype"
                            sx={{ alignSelf: 'center', color: theme.palette.text.primary }}
                        >
                            <img src={SkypeIcon} alt="Skype" style={{ width: '24px', height: '24px', filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="inikooravesh@gmail.com" arrow>
                        <IconButton
                            color="inherit"
                            size={isSmallScreen ? 'medium' : 'large'}
                            href=""
                            aria-label="Slack"
                            sx={{ alignSelf: 'center', color: theme.palette.text.primary }}
                        >
                            <img src={SlackIcon} alt="Slack" style={{ width: '24px', height: '24px', filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Mohammad nikooravesh" arrow>
                        <IconButton
                            color="inherit"
                            size={isSmallScreen ? 'medium' : 'large'}
                            href="https://teams.live.com/l/invite/FAAQoBc0OteWVCN3wE"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Microsoft Teams"
                            sx={{ alignSelf: 'center', color: theme.palette.text.primary }}
                        >
                            <img src={TeamsIcon} alt="Microsoft Teams" style={{ width: '24px', height: '24px', filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="nikooravesh" arrow>
                        <IconButton
                            color="inherit"
                            size={isSmallScreen ? 'medium' : 'large'}
                            href="https://discordapp.com/users/747049536353992794"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Discord"
                            sx={{ alignSelf: 'center', color: theme.palette.text.primary }}
                        >
                            <img src={DiscordIcon} alt="Discord" style={{ width: '24px', height: '24px', filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none' }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="nikooravesh" arrow>
                        <IconButton
                            color="inherit"
                            size={isSmallScreen ? 'medium' : 'large'}
                            href="https://www.linkedin.com/in/nikooravesh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            sx={{ alignSelf: 'center', color: theme.palette.text.primary }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Box>
        </Box>
    );
};

export default About;