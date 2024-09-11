import { styled } from '@mui/material'
import headerImg from '../assets/header-piramide.png'

export const Header = ()=>{
    const Image = styled('img')({width: '100%',height: '100px'})
    
    return (
        <Image src={headerImg}/>
    )
}