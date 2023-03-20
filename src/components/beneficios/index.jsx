import { BeneficiosContainer, BeneficiosContent, Box, Content, Background, Title } from "./styles";
import { Button } from "../button";
import Crescimento from '../../assets/crescimento.webp'
import Hidratacao from '../../assets/hidratado.webp'
import Pontas from '../../assets/pontas.webp'

export function Beneficios({ tratamentosRef }) {

    return (
        <BeneficiosContainer ref={tratamentosRef}>
            <h1>
                O que o <span style={{ color: '#573333' }}>Cronograma Capilar</span> pode fazer por você?
            </h1>
            <BeneficiosContent>
                <Background>
                    <Box>
                        <Title>
                            <h2>
                                Potencializa o Crescimento
                            </h2>
                            <p>
                                Com ingredientes naturais e fórmula exclusiva, nossas receitas caseiras ajudam a estimular o crescimento de novos fios e fortalecer os já existentes. Isso ocorre porque os ingredientes presentes aumentam a sua temperatura corporal interna, assim seu metabolismo acelera e melhora circulação do sangue no couro cabeludo fazendo que seu cabelo cresça 46% mais.
                            </p>
                        </Title>
                        <Content>
                            <img
                                src={Crescimento}
                            />
                        </Content>
                    </Box>
                </Background>
                <Background>
                    <Box className="toLeft">
                        <Content>
                            <img
                                src={Hidratacao}
                            />
                        </Content>
                        <Title>
                            <h2>
                                Hidrata Intensamente
                            </h2>
                            <p>
                                Nossas receitas exclusivas contém ingredientes naturais que ajudam a hidratar profundamente o cabelo, deixando-o macio, brilhante e saudável. A hidratação é essencial para manter a saúde dos fios, pois ajuda a prevenir danos causados por fatores externos, como sol, vento e poluição, além de diminuir a quebra. A combinação dos ingredientes naturais presentes em nossas receitas ajuda a restaurar a hidratação natural do cabelo, deixando-o sedoso e fácil de pentear.
                            </p>
                        </Title>
                    </Box>
                </Background>
                <Background>
                    <Box>
                        <Title>
                            <h2>
                                Acaba Com As Pontas Duplas E Os Frizz
                            </h2>
                            <p>
                                Nossao cronograma ajuda a reduzir o frizz e as pontas duplas, deixando o cabelo com uma aparência mais saudável e bonita. O frizz é causado por cabelos secos e danificados, enquanto as pontas duplas são resultado de pontas danificadas que se dividem em duas ou mais partes. As receitas caseiras presentes em nosso cronograma ajudam a nutrir e proteger o cabelo, deixando-o mais forte e resistente a danos. Além disso, a fórmula foi cuidadosamente elaborada e testada dermatológicamente para proporcionar resultados visíveis em pouco tempo, sem efeitos colaterais indesejados.
                            </p>
                        </Title>
                        <Content>
                            <img
                                src={Pontas}
                            />
                        </Content>
                    </Box>
                </Background>

                <Button
                    href='#'
                    title='SIM, QUERO ACESSAR O CRONOGRAMA AGORA'
                />

            </BeneficiosContent>
        </BeneficiosContainer>
    )
}