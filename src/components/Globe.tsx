import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// --------------------------------------------------

mapboxgl.accessToken = 'pk.eyJ1IjoibWFtYWRtYW1hZCIsImEiOiJjbTdjMG5qNWEwMm1oMm1zZHZwZHJ2c2o5In0.mSIdMTopYB4d10o5UkeJzg';

const GlobeMap: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const spinEnabled = useRef<boolean>(true);
    const userInteracting = useRef<boolean>(false);

    useEffect(() => {
        if (mapContainer.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/satellite-v9',
                projection: 'globe',
                zoom: 1,
                center: [-90, 40],
                attributionControl: false,
            });

            mapRef.current.on('style.load', () => {
                mapRef.current?.setFog({
                    'space-color': 'rgba(0, 0, 0, 0)',
                    'star-intensity': 0,
                    'horizon-blend': 0,
                    'color': 'rgba(0, 0, 0, 0.0)',
                    'high-color': 'rgba(0, 0, 0, 0)',
                });

                mapRef.current?.setPaintProperty('background', 'background-color', 'rgba(0, 0, 0, 0)');
            });

            const spinGlobe = () => {
                const zoom = mapRef.current?.getZoom();
                if (spinEnabled.current && !userInteracting.current && zoom && zoom < 5) {
                    const distancePerSecond = 360 / 120;
                    const center = mapRef.current?.getCenter();
                    if (center) {
                        center.lng -= distancePerSecond;
                        mapRef.current?.easeTo({ center, duration: 1000, easing: (n) => n });
                    }
                }
            };

            mapRef.current.on('mousedown', () => {
                userInteracting.current = true;
            });

            mapRef.current.on('mouseup', () => {
                userInteracting.current = false;
                spinGlobe();
            });

            mapRef.current.on('dragend', spinGlobe);
            mapRef.current.on('pitchend', spinGlobe);
            mapRef.current.on('rotateend', spinGlobe);
            mapRef.current.on('moveend', spinGlobe);

            spinGlobe();

            return () => {
                mapRef.current?.remove();
            };
        }
    }, []);

    return (
        <div>
            <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />
        </div>
    );
};

export default GlobeMap;