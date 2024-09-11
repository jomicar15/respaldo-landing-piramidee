import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material';
import { useState } from 'react';
import './Faqs.css';

const SectionFaqs = styled('section')({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '1em',
    marginBottom: '2em'
});

export const Faqs = ({ listOfFaqs }) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <SectionFaqs className="container-faqs">
            {listOfFaqs.map((faq, i) => {
                const { title, description } = faq;
                const isCurrentlyExpanded = expanded === i;

                return (
                    <Accordion
                        key={i}
                        expanded={expanded === i}
                        onChange={handleChange(i)}
                        sx={{
                            borderRadius: '16px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            color: 'gray',
                            // Eliminar el margen predeterminado
                            '&:not(:last-child)': {
                                marginBottom: 0,
                            },
                            '&:before': { display: 'none' } 
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${i}-content`}
                            id={`panel${i}-header`}
                            sx={{
                                backgroundColor: '#e8e8e8',
                                borderRadius: isCurrentlyExpanded ? '16px 16px 0 0' : '16px',
                                border: 'none',
                                padding: '0 16px'
                            }}
                        >
                            <Typography sx={{ fontSize: '1em', fontWeight: 'bolder' }}>
                                {title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor: '#f1f1f1',
                                paddingTop: '1em',
                                borderRadius: '0 0 16px 16px',
                                padding: '16px'
                            }}
                        >
                            {description.map((paragraph, index) => (
                                <Typography key={index} sx={{ border: 'none', fontSize: '0.8em' }}>
                                    {paragraph}
                                </Typography>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </SectionFaqs>
    );
};

Faqs.propTypes = {
    listOfFaqs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.arrayOf(PropTypes.string).isRequired
        })
    ).isRequired
};
