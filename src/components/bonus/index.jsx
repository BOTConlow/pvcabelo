import { BonusContainer, Box, BoxContent, Content, Title } from "./styles";
import Ebook from '../../assets/guia.webp'
import { Button2 } from "../button";


export function Bonus() {

    return (
        <BonusContainer>
            <Title>
                <h1>
                    <u>E não para por ai</u>
                </h1>
                <p>
                    Além de todo esse conteúdo exclusivo ainda vamos disponibilizar para você nossos <span style={{ color: '#c9ae95' }}>top 4 materiais pagos de graça!</span>
                </p>
            </Title>
            <Content>
                <Box>
                    <BoxContent>
                        <img
                            src={Ebook}
                        />
                        <div>
                            <h1>
                                Detox Zero Acne
                            </h1>
                            <p>
                                Transforme sua pele com os poderes desintoxicantes dos nossos sucos detox para acne. Com ingredientes naturais perfeitos para retirar as toxinas causadoras da acne no seu organismo.
                            </p>
                        </div>
                    </BoxContent>
                    <BoxContent>
                        <img
                            src={Ebook}
                        />
                        <div>
                            <h1>
                                Detox Zero Acne
                            </h1>
                            <p>
                                Transforme sua pele com os poderes desintoxicantes dos nossos sucos detox para acne. Com ingredientes naturais perfeitos para retirar as toxinas causadoras da acne no seu organismo.
                            </p>
                        </div>
                    </BoxContent>
                </Box>
                <Box>
                    <BoxContent>
                        <img
                            src={Ebook}
                        />
                        <div>
                            <h1>
                                Detox Zero Acne
                            </h1>
                            <p>
                                Transforme sua pele com os poderes desintoxicantes dos nossos sucos detox para acne. Com ingredientes naturais perfeitos para retirar as toxinas causadoras da acne no seu organismo.
                            </p>
                        </div>
                    </BoxContent>
                    <BoxContent>
                        <img
                            src={Ebook}
                        />
                        <div>
                            <h1>
                                Detox Zero Acne
                            </h1>
                            <p>
                                Transforme sua pele com os poderes desintoxicantes dos nossos sucos detox para acne. Com ingredientes naturais perfeitos para retirar as toxinas causadoras da acne no seu organismo.
                            </p>
                        </div>
                    </BoxContent>
                </Box>
            </Content>
        </BonusContainer>
    )
}