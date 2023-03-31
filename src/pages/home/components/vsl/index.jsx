import { Content, Headline, VslContent, VslStyle } from "./styles";
import Kayky from '../../../../assets/kayky.webp'
import { Button } from "../button";


export function Vsl() {

    return (
        <VslContent>
            <Content>
                <Headline>
                    <h1>Como Faço Uma <span style={{ color: '#fadabb' }}>Hidratação Poderosa</span> No Chuveiro Que <span style={{ color: '#fadabb' }}>Hidrata</span> e <span style={{ color: '#fadabb' }}>Potencializa</span> o <span style={{ color: '#fadabb' }}>Crescimento.</span></h1>
                </Headline>
                <VslStyle>

                    <iframe
                        id="panda-4295005e-1128-4f20-8d01-87cf4fe97d55"
                        src="https://player-vz-4c44e78e-c09.tv.pandavideo.com.br/embed/?v=4295005e-1128-4f20-8d01-87cf4fe97d55"
                        style={{ border: 'none' }}
                        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                        width="720"
                        height="360"
                        fetchpriority="high">
                    </iframe>

                    <p>ATENÇÃO: Esse vídeo poderá sair do ar a qualquer momento</p>
                </VslStyle>
            </Content>
            <Button
                title='SIM, QUERO ACESSAR O CRONOGRAMA CAPILAR'
                desc='Acessar o Cronograma Capilar Agora Mesmo'
            />

        </VslContent>
    )
}