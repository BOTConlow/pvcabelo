import { BonusContainer, Box, BoxContent, Content, Title } from "./styles";
import { Button2 } from "../button";
import Bonus1 from '../../../../assets/bonus1.webp'
import Bonus2 from '../../../../assets/bonus2.webp'
import Bonus3 from '../../../../assets/bonus3.webp'
import Vip from '../../../../assets/vip.webp'


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
                            src={Bonus1}
                        />
                        <div>
                            <h1>
                                Esquema Reconstrução Capilar
                            </h1>
                            <p>
                                Transforme seu cabelo com nossas poderosas receitas com ação reconstrutora capilar. Desenvolvido com ingredientes naturais e testado dermatológicamente, esse produto é perfeito para restaurar a saúde dos fios danificados por processos químicos, calor excessivo ou outros fatores.
                            </p>
                        </div>
                    </BoxContent>
                    <BoxContent>
                        <img
                            src={Bonus2}
                        />
                        <div>
                            <h1>
                                Prevenção Capilar
                            </h1>
                            <p>
                                Proteja seu cabelo contra os danos causados pela chapinha e tonalizantes com o nosso poderoso produto de prevenção capilar. Desenvolvido com técnicas exclusivas, esse produto é perfeito para manter seus fios saudáveis e protegidos.
                            </p>
                        </div>
                    </BoxContent>
                </Box>
                <Box>
                    <BoxContent>
                        <img
                            src={Bonus3}
                        />
                        <div>
                            <h1>
                                Guia Rádio
                            </h1>
                            <p>
                                Acabe de vez com o frizz e as pontas duplas com o nosso poderoso produto de tratamento capilar. Desenvolvido com receitas fáceis e naturais, esse produto é perfeito para acabar com esses problemas que tanto incomodam.
                            </p>
                        </div>
                    </BoxContent>
                    <BoxContent>
                        <img
                            src={Vip}
                        />
                        <div>
                            <h1 style={{ maxWidth: '16rem' }}>
                                Suporte E Motivação No Grupo Vip
                            </h1>
                            <p>
                                Toda a ajuda e motivação que você precisa para se manter focada no seu objetivo.
                            </p>
                        </div>
                    </BoxContent>
                </Box>
            </Content>
        </BonusContainer>
    )
}