import React, { useState } from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Container,
    Divider,
    Grid,
    useMediaQuery,
} from '@mui/material';

// --------------------------------------------------

const experiences = [
    {
        title: "GIS Specialist",
        duration: "2021-2023",
        company: "SSI Company (Spatial Science Innovators)",
        location: "Tehran, IRAN",
        description: [
            "Contributed to the development of software in the field of Cartography.",
            "Completed GISReady projects with various challenges (Group work).",
            "Participated in the development of WebGIS systems.",
            "Undertook projects for data integration, data collection, geodatabase maintenance, topology, and GIS analysis.",
            "Involved in Photogrammetry projects using drones, including the software aspects of preprocessing and data processing.",
            "Conducted land surveying projects using GNSS devices and Total station, which were a major part of my responsibilities at the company."
        ]
    },
    {
        title: "GIS-Developer",
        duration: "2022-2023",
        company: "Inspectigence B.V.",
        location: "Delf, South Holland, Netherlands (Remote)",
        description: [
            "Although my time at the company was limited, it was highly effective for me. I gained valuable experience in developing the GIS sector, particularly in web-based spatial information visualization.",
            "My key achievements include:",
            "Conceptual design of a spatial database.",
            "Real-time data display after submission via mobile applications.",
            "Real-time and online spatial data editing.",
            "Adding data to WebGIS and displaying multiple information layers simultaneously.",
            "Switching between multiple base maps.",
            "Creating multiple maps with different usages on one page without interference.",
            "Implementing necessary map tools.",
            "Displaying information by clicking on map features (Identify Feature).",
            "Converting various spatial data formats.",
            "Server management.",
            "These experiences illustrate the impactful projects I worked on in a startup setting during this limited time."
        ]
    },
    {
        title: "Land Specialist",
        duration: "2023-2024",
        company: "Public Service",
        location: "Dezful, IRAN",
        description: [
            "Utilized GIS tools to map and analyze land data."
        ]
    },
    {
        title: "Freelancer",
        duration: "2024-now",
        company: "Freelancer",
        location: "Remote",
        description: [
            "Create Denta GeoBI Application",
            "Making an educational video"
        ]
    }
];

const Experience: React.FC = () => {
    const [selectedExperience, setSelectedExperience] = useState<number>(0);
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Container sx={{ p: '0 !important', mb: 20 }}>
            <Typography 
                variant="h3" 
                component="h3" 
                gutterBottom 
                sx={{ textAlign: 'center', pb: 8 }}
            >
                Professional Experience
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} md={4} sx={{ pl: { sm: '0 !important'} }}>
                    <List>
                        {experiences.map((experience, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton
                                    selected={selectedExperience === index}
                                    onClick={() => setSelectedExperience(index)}
                                >
                                    <ListItemText primary={experience.company} sx={{ p: 0.3 , pl: 1.2  }}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box 
                        sx={{ 
                            p: 2, 
                            border: isMobile ? 1 : 0,
                            ...(isMobile ? {} : { borderLeft: 1 }), 
                            borderColor: 'divider', 
                            borderRadius: isMobile ? 1 : 0,
                            display: 'flex',
                            flexDirection: 'column',
                            height: isMobile ? '600px' : '450px'
                        }}
                    >

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Typography variant="h6">
                                {experiences[selectedExperience].title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" sx={{ ml: 2 }}>
                                {experiences[selectedExperience].duration}
                            </Typography>
                        </Box>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '0.825rem', mt: -0.7, mb: 1.5 }}>
                            {experiences[selectedExperience].location}
                        </Typography>
                        <Divider />

                        <Box 
                            sx={{ 
                                flexGrow: 1, 
                                overflowY: 'auto', 
                                
                                pt: 4.5, 
                                '&::-webkit-scrollbar': {
                                    width: '5px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: 'transparent',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: '#88888865',
                                    borderRadius: '4px',
                                },
                                '&::-webkit-scrollbar-thumb:hover': {
                                    background: '#555',
                                },
                            }}
                        >
                            {experiences[selectedExperience].description.map((line, index) => (
                                <Box key={index} sx={{ 
                                    display: 'flex', 
                                    alignItems: 'flex-start', 
                                    mb: 1, 
                                    pl: 2, 
                                    borderLeft: '1px solid', 
                                    borderColor: 'primary.main', 
                                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                    borderRadius: '4px'
                                }}>
                                    <Typography paragraph sx={{ mb: 1 }}>
                                        {line}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Experience;