import Background1 from '../../assets/background1.webp'
import { Content } from './styles'


const backgroundImgs = {
    background1: `url(${Background1})`,
    background2: 'linear-gradient(#4c2d2d 0%, #402626 34.48%, #382222 100%)',
    background3: 'radial-gradient(#573333, #291919)',
}

export function Background(props) {

    const { bgImage } = props

    return (

        <Content
            style={{
                background: `${backgroundImgs[bgImage]}` 
            }}
        >
            {props.children}
        </Content>

    )

}