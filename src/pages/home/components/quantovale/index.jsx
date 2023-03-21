import { CaretDoubleRight } from "phosphor-react";
import { Button2 } from "../button";
import { Content, ContentContainer, Price, Texts, Title } from "./styles";


export function Quantovale() {

    return (
        <ContentContainer>
            <Title>
                <h1>
                    Quanto Vale Ter Sua Autoestima de Volta?
                </h1>
            </Title>
            <Content>
                <h1>
                    Acesso ao Cronograma + 2 super bônus por menos de uma progressiva
                </h1>
                <Texts>
                    <CaretDoubleRight size={30} style={{ color: '#c9ae95' }} />
                    <h1>
                        Cronograma Capilar
                    </h1>
                    <p>
                        R$ 89,90
                    </p>
                </Texts>
                <Texts>
                    <CaretDoubleRight size={30} style={{ color: '#c9ae95' }} />
                    <h1>
                        Cronograma Capilar
                    </h1>
                    <p>
                        R$ 89,90
                    </p>
                </Texts>
                <Texts>
                    <CaretDoubleRight size={30} style={{ color: '#c9ae95' }} />
                    <h1>
                        Cronograma Capilar
                    </h1>
                    <p>
                        R$ 89,90
                    </p>
                </Texts>
                <Texts>
                    <CaretDoubleRight size={30} style={{ color: '#c9ae95' }} />
                    <h1>
                        Cronograma Capilar
                    </h1>
                    <p>
                        R$ 89,90
                    </p>
                </Texts>
                <Price>
                    <p style={{ marginBottom: '.5rem' }}>
                        De <s>R$ 396,70</s>
                    </p>
                    <p style={{ fontSize: '2.2rem', fontWeight: 'bold' }}>
                        por 11x de:
                    </p>
                    <h1>
                        R$ 5,38
                    </h1>
                    <p style={{ marginBottom: '1.5rem' }}>
                        ou 49,80 a vista
                    </p>
                    <Button2
                        title='TENHA SUA AUTOESTIMA DE VOLTA'
                        desc='compra segura com garantia incondicional de 30 dias'
                    />
                </Price>
            </Content>
        </ContentContainer>
    )
}