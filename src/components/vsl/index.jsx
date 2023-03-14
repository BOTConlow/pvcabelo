import { Content, Headline, VslContent, VslStyle } from "./styles";
import Kayky from '../../assets/kayky.webp'
import { Button } from "../button";


export function Vsl() {

    return (
        <VslContent>
            <Content>
                <Headline>
                    <h1>Com Esses <span style={{ color: '#fadabb' }}>Simples Passos</span> Seu Cabelo <span style={{ color: '#fadabb' }}>Cresce 46% Mais</span> E Elimina Totalmente As <span style={{ color: '#fadabb' }}>Pontas Duplas</span> E <span style={{ color: '#fadabb' }}>Frizz</span></h1>
                </Headline>
                <VslStyle>
                    <img
                        src={Kayky}
                    />
                    <p>ATENÇÃO: Esse vídeo poderá sair do ar a qualquer momento</p>
                </VslStyle>
            </Content>
            <Button
                href='https://youtube.com'
                title='SIM, QUERO ACESSAR O CRONOGRAMA CAPILAR'
                desc='Acessar o Cronograma Capilar Agora Mesmo'
            />

        </VslContent>
    )
}