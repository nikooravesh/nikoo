import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import TechnologySection from './tech';

// --------------------------------------------------

const StyledImage = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
    border: '4px solid transparent',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    animation: 'gradient-border 2s linear alternate infinite',
    '@keyframes gradient-border': {
        '0%': { borderColor: '#f72585' },
        '10%': { borderColor: '#b5179e' },
        '20%': { borderColor: '#7209b7' },
        '30%': { borderColor: '#560bad' },
        '40%': { borderColor: '#480ca8' },
        '50%': { borderColor: '#3a0ca3' },
        '60%': { borderColor: '#3f37c9' },
        '70%': { borderColor: '#4361ee' },
        '80%': { borderColor: '#4895ef' },
        '90%': { borderColor: '#4cc9f0' },
        '100%': { borderColor: '#f72585' },
    },
});

const About: React.FC = () => {
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'column' },
                alignItems: 'center', 
                pb: { xs: 20, sm: 20 },
                width: '100%', 
                px: { xs: 0, sm: 10 }
            }}
        >
            <Box sx={{ flex: '0 0 100%', display: 'flex', justifyContent: 'center', mt: { xs: 2, sm: 0 }, py: { xs: 8, sm: 0 }, pb: { xs: 0, sm: 8} }}>
                <StyledImage
                     src={`${process.env.PUBLIC_URL}/NR.jpg`}
                    alt="Person"
                />
            </Box>
            <Box sx={{ flex: '0 0 100%', textAlign: 'center', pt: { xs: 8, sm: 0 }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', pb: { xs: 20, sm: 20 } }}>
                <Typography variant="h3" component="h3" sx={{ fontWeight: 700 }}>
                    About me
                </Typography>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ mt: 2, fontSize: '1.05rem' }}>
                        Hello! My name is Mohammad, and my friends call me Nikoo, which has become my middle name. I have a personal passion for building practical web applications in the field of spatial sciences. I approach this work with enthusiasm and dedication. My primary goal is to tackle challenges, and I hope to make positive contributions to the real world and be impactful.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, fontSize: '1.05rem' }}>
                        I graduated with a Bachelor’s degree in Surveying Engineering from Jundi Shapur University of Dezful in Iran, where my favorite specialization is Geographic Information Systems (GIS). I have a strong interest in GIS development, and my professional journey began during my student years in this field.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, fontSize: '1.05rem' }}>
                        I currently reside in Khuzestan, Iran. At present, I am focused on documenting and sharing my experiences, as teaching is another personal passion of mine. I believe in the importance of continuous learning, and I strive to acquire new concepts and experiences to further enhance my skills.
                    </Typography>
                </Box>
                <Typography variant="body1" sx={{ mt: 2, fontSize: '1.05rem' , textAlign: 'center' }}>
                    In my limited free time, I enjoy playing video games.
                </Typography>
            </Box>
            <TechnologySection />
        </Box>
    );
};

export default About;