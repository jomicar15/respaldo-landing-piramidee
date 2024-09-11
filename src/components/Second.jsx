import { styled } from '@mui/material'
import cotizador from '../assets/cotizador.png'
import {colors} from '../mocks/listOfFaqs.js'

const Container = styled('section')({
    backgroundColor:colors.backgroundColorPrincipal, 
    display:'flex', 
    color:'white',
    fontSize:'1.6em',
    padding:'40px',
    gap:'20px',
    justifyContent:'space-around',
    alignItems:'center',
    '@media (max-width: 768px)': {
        flexWrap:'wrap',
        textAlign:'center',
        padding: '40px 20px', 
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize:'1em',
    },
})

export const Second = ()=>{
    return(
            <Container>
                    <h2>Contáctanos y obtén una póliza de seguro
                    para educación universitaria</h2>
                    <img width='350px' src={cotizador}/>
            </Container>
    )
}

