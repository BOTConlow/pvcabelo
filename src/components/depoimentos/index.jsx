import { DepoimentosContainer, Images, Title } from "./styles";
import { Button } from "../button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Dep1 from '../../assets/dep1.jpg'
import Dep2 from '../../assets/dep2.webp'
import Dep4 from '../../assets/dep4.webp'
import Dep5 from '../../assets/dep5.webp'
import Dep6 from '../../assets/dep6.webp'
import Dep7 from '../../assets/dep7.webp'
import Dep8 from '../../assets/dep8.webp'
import Dep9 from '../../assets/dep9.webp'

export function Depoimentos({depoimentosRef}) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1300,
        autoplaySpeed: 7000,
        cssEase: "linear",
    };

    return (
        <DepoimentosContainer ref={depoimentosRef}>
            <Title>
                <h1>
                    <span style={{ color: '#fadabb' }}>Não acredite</span> apenas nas nossas palavras
                </h1>
                <p>
                    <span style={{ color: '#fadabb' }}><b>Veja você mesmo</b></span> as <b>transformações incríveis</b> que o Cronograma Capilar tem proporcionado a vida de todos que optaram em testar nosso método. <b>Experimente ainda hoje</b>, pois com nossa garantia de 100% de satisfação, <b>você não tem nada a perder</b>, só um <b>cabelo lindo e saudável a ganhar</b>.
                </p>
                <Button
                    href='dermatoRef'
                    title='QUERO ACESSAR O CRONOGRAMA CAPILAR'
                />
            </Title>
            <Images>
                <Slider {...settings}>
                    <div>
                        <img
                            src={Dep1}
                        />
                    </div>
                    <div>
                        <img
                            src={Dep2}
                        />
                    </div>
                    <div>
                        <img
                            src={Dep4}
                        />
                    </div>
                    <div>
                        <img
                            src={Dep5}
                        />
                    </div>
                    <div>
                        <img
                            src={Dep6}
                        />
                    </div>
                    <div>
                        <img
                            src={Dep7}
                        />
                    </div>
                    <div>
                        <img
                            src={Dep8}
                        />
                    </div>
                    <div>
                        <img
                            src={Dep9}
                        />
                    </div>
                </Slider>
            </Images>
        </DepoimentosContainer>
    )
}