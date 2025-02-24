import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

// --------------------------------------------------

const technologies = {
    software: [
        'ArcGIS',
        'GeoServer',
        'PhotoShop',
        'Illustrator',
        'Git',
        'QGIS',
        'AutoCAD Civil 3D',
        'GlobalMapper',
        'Google Earth Pro',
        'OsGeoLive',
        'Agisoft Metashape',
        'Google Earth Engine',
        'ENVI',
        'Matlab',
        'Office',
        'GDAL',
    ],
    frontend: [
        'JavaScript',
        'HTML & CSS',
        'React.js',
        'OpenLayers',
        'Turf.js',
        'Material-UI',
        'Leaflet',
        'MapBox',
        'GitLab',
        'GitHub',
        'UI/UX',
    ],
    backend: [
        'Node.js',
        'Next.js',
        'Linux/Ubuntu',
        'Nginx',
        'PostGIS',
        'PostgreSQL',
        'MongoDB',
        'PgRouting',
    ],
};

const TechnologyCard = styled(Card)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '8px',
    padding: '16px',
    margin: '8px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    backgroundColor: theme.palette.background.paper + '80%',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

const Icon = styled('img')({
    width: '20px',
    height: '20px',
    marginRight: '10px',
});

const getShortName = (name: string) => {
    return name.split(/[\s/.]/)[0];
};

const getFirstColorFromSVG = async (src: string): Promise<string> => {
    const response = await fetch(src);
    const svgText = await response.text();
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');

    const firstColorElement = svgDoc.querySelector('[fill], [stroke]');
    if (firstColorElement) {
        return firstColorElement.getAttribute('fill') || firstColorElement.getAttribute('stroke') || '#333b4d99';
    }

    const styleTags = svgDoc.querySelectorAll('style');
    const styles = Array.from(styleTags).map(style => style.innerHTML).join('\n');
    
    const colorRegex = /\.cls-\d+\s*{[^}]*fill:\s*([^;]*);?/g;
    let match;

    while ((match = colorRegex.exec(styles)) !== null) {
        return match[1];
    }

    const specialClassRegex = /\.st0\s*{[^}]*fill:\s*([^;]*);?/g;
    while ((match = specialClassRegex.exec(styles)) !== null) {
        return match[1];
    }

    return '#333b4d99';
};

const TechnologySection: React.FC = () => {
    const [colors, setColors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const fetchColors = async () => {
            const colorPromises = Object.values(technologies).flatMap(category =>
                category.map(async (item) => {
                    const imgSrc = `${process.env.PUBLIC_URL}/icons/${getShortName(item)}.svg`;
                    const color = await getFirstColorFromSVG(imgSrc);
                    return { item, color };
                })
            );

            const colorResults = await Promise.all(colorPromises);
            const colorMap = colorResults.reduce((acc, { item, color }) => {
                acc[item] = color;
                return acc;
            }, {} as { [key: string]: string });

            setColors(colorMap);
        };

        fetchColors();
    }, []);

    return (
        <Box sx={{ padding: 4, width: '100%', textAlign: 'center'}} >
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
                    Technologies
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.05rem' }}>
                    Fundamental technologies that I use
                </Typography>
            </Box>

            <Grid container spacing={2}>
                {Object.entries(technologies).map(([category, items]) => (
                    <Grid item xs={12} sm={4} key={category}>
                        <TechnologyCard>
                            <Typography variant="h6" component="h3" sx={{ marginBottom: 2 }}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Typography>
                            <CardContent>
                                <Box>
                                    {items.map((item) => {
                                        const color = colors[item] || '#333b4d99';

                                        return (
                                            <Box key={item} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1.1 }}>
                                                <Icon src={`./icons/${getShortName(item)}.svg`} alt={item} />
                                                <Typography variant="body2" sx={{ fontSize: '0.9rem', fontWeight: '600' }}>{item}</Typography>
                                                <Box
                                                    sx={{
                                                        flexGrow: 1,
                                                        height: '1px',
                                                        backgroundColor: color,
                                                        marginLeft: '10px',
                                                    }}
                                                />
                                            </Box>
                                        );
                                    })}
                                </Box>
                            </CardContent>
                        </TechnologyCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TechnologySection;