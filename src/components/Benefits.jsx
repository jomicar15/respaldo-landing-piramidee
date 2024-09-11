import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { CardCarousel } from './CardCarousel';
import PropTypes from 'prop-types';
import { useMediaQuery, useTheme } from '@mui/material';
import { imgUrl1, imgUrl2, imgUrl3, imgUrl4 } from '../mocks/listOfFaqs.js';

// ------------------------- MOCKEO DE DATA -------------------
const images = [imgUrl1, imgUrl2, imgUrl3, imgUrl4];

// Estilos para las flechas de navegación
const styleNavButtonsProps = {
    style: {
        backgroundColor: 'black', // Color de las flechas
        color: 'white'
    }
};

const styeNavButtonsWrapperProps = {
    style: {
        top: '50%', // Posición de las flechas
        transform: 'translateY(-50%)'
    }
};

const styleIndicatorContainerProps = {
    style: {
        marginTop: '20px' // Separación entre el contenido y los puntos
    }
};

export function Benefits({ carouselData }) {
    const theme = useTheme();
    // Definir los puntos de corte para el número de elementos que se muestran
    const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('lg')); // >1200px
    const isLargeScreen = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 900px-1200px
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px-900px

    // Determinar cuántos elementos se deben mostrar en función del tamaño de la pantalla
    const itemsPerGroup = isExtraLargeScreen ? 4 : isLargeScreen ? 3 : isMediumScreen ? 2 : 1;

    // Agrupar los datos en función de cuántos elementos deben estar visibles
    const groupedData = carouselData.reduce((acc, item, index) => {
        const groupIndex = Math.floor(index / itemsPerGroup);
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(item);
        return acc;
    }, []);

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>¿Por qué un seguro educativo?</h2>
            <Carousel
                navButtonsAlwaysVisible
                sx={{
                    width: '100%', 
                    maxWidth: '100%', 
                    margin: '0 auto', 
                    marginTop: '20px',
                    overflow: 'hidden' 
                }}
                navButtonsProps={styleNavButtonsProps}
                navButtonsWrapperProps={styeNavButtonsWrapperProps}
                indicatorContainerProps={styleIndicatorContainerProps}
                timeout={500} 
                duration={500}
                interval={5000}
            >
                {groupedData.map((group, i) => (
                    <div 
                        style={{ 
                            display: 'flex', 
                            justifyContent: 'space-around', 
                            width: '100%', 
                            maxWidth: '100%' 
                        }} 
                        key={i}
                    >
                        {group.map((item, index) => (
                            <CardCarousel 
                                key={index} 
                                item={{ 
                                    ...item, 
                                    imgUrl: images[index % images.length] 
                                }} 
                                sx={{
                                    maxWidth: '100%',
                                    flex: `0 0 ${100 / itemsPerGroup}%`, // Ajustar el ancho de cada tarjeta según el número de elementos visibles
                                }}
                            />
                        ))}
                    </div>
                ))}
            </Carousel>
        </>
    );
}

Benefits.propTypes = {
    carouselData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.arrayOf(PropTypes.string).isRequired,
            imgUrl: PropTypes.string
        })
    ).isRequired,
};
