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
                        id="panda-b4305bc6-f555-44fd-bb26-b3264ce87c9b"
                        src="https://player-vz-4c44e78e-c09.tv.pandavideo.com.br/embed/?v=b4305bc6-f555-44fd-bb26-b3264ce87c9b"
                        style={{ border: 'none' }}
                        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                        width="100%"
                        height="100%"
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