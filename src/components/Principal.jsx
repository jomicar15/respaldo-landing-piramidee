import { styled } from '@mui/material'
import cotizador from '../assets/cotizador.png'
import {colors} from '../mocks/listOfFaqs.js'

const SectionPrincipal = styled('section')({
    backgroundColor:colors.backgroundColorPrincipal, 
    display:'flex', 
    color:'white',
    fontSize:'1.6em',
    padding:'80px 0px 40px 0px',
    justifyContent:'space-around',
    alignItems:'center',
    '@media (max-width: 768px)': {
        flexWrap:'wrap',
        textAlign:'center',
        padding: '40px 20px', 
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize:'1.3em',
    },
})
const Image = styled('img')({
    width:'350px',
    '@media (max-width: 600px)': {
        marginTop:'2em'
    },
})


export const Principal = ()=>{
    return(
            <SectionPrincipal>
                    <article>
                        <h5>Seguro de educación</h5>
                        <h1>Protección de Matrícula Universitaria</h1>
                        <p>Texto adicional</p>
                    </article>
                    <Image src={cotizador}/>
            </SectionPrincipal>
    )
}

