import { styled } from '@mui/material';
import PropTypes from 'prop-types';

const Div = styled('div')(({ isNormal }) => ({
    display: 'flex',
    flexDirection: isNormal ? 'row' : 'row-reverse',
    gap: '20px',
    placeItems: 'center',
}));

const Article = styled('article')({
    width: 'auto',
    height: 'auto',
});

export const QuestionComponent = ({ data }) => {
    const { title, description, imgUrl, isNormal } = data;
    return (
        <Div isNormal={isNormal}>
            <img src={imgUrl} alt={`img about ${title}`} style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
            <Article>
                <h2>{title}</h2>
                {description.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            </Article>
        </Div>
    );
};

QuestionComponent.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired,
        imgUrl: PropTypes.string.isRequired,
        isNormal: PropTypes.bool.isRequired,
    }).isRequired,
};
