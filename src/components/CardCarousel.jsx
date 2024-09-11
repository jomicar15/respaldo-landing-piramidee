import { styled } from '@mui/material';
import PropTypes from 'prop-types';

const Image = styled('img')({ maxWidth: '150px', height: '150px', borderRadius:'50%' })
const SectionCard = styled('section')({
    display: 'flex', 
    width:'250px',
    flexDirection: 'column', 
    alignItems: 'center', 
    textAlign: 'center',
})

export const CardCarousel = ({item})=>{

    const {title,description,imgUrl} = item

    return (
        <SectionCard>
            <Image src={imgUrl} alt={`Imagen de ${imgUrl}`} />
            <h2>{title}</h2>
            <p>{description}</p>
        </SectionCard>
    )
}

CardCarousel.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired,
        imgUrl: PropTypes.string.isRequired,
    }).isRequired,
};