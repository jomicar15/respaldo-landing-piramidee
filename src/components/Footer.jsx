import footerImg from '../assets/footer-piramide.png'

export const Footer = ()=>{

    const styleImgFooter = {
        width: '100%',
        height: '300px'
    }

    return (
        <img style={styleImgFooter} src={footerImg}/>
    )
}