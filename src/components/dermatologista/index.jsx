import Dermato from '../../assets/Dermatologista.webp'
import { DermatoContainer, Promocao, Texts } from './styles'
import { Button } from "../button";


export function Dermatologista(dermatoRef) {

    return (
        <DermatoContainer>
            <Texts>
                <div>
                    <h1>
                        Conheça sua <span style={{ color: '#4c2d2d' }}>dermatologista</span>
                    </h1>
                    <p style={{ fontSize: '1.5rem' }}>
                        <span style={{ color: '#c9ae95' }}><b>Dra. PAULA ANDRADE</b></span>
                    </p>
                    <p>
                        Dermatologista e Criadora do Protoclo Pele Perfeita, Membro da Sociedade Brasileira de Dermatologia, com anos de experiência e especializações em Longevidade Saudável, Fitoterapia e Medicina Quântica, incluindo a última tecnologia de peptídeos anti-acnes, a Doutora Karina Costa é considerada uma das melhores do Brasil na luta contra as acnes.
                    </p>
                    <p>
                        "Eu desenvolvi o Protocolo Pele Perfeita com objetivo principal de ajudar as pessoas. Confie na minha experiência e especialização e experimente o Protocolo Pele Perfeita. Sua pele merece o melhor, e essa é a solução definitiva para isso."
                    </p>
                </div>
                <img
                    src={Dermato}
                />
            </Texts>
            <Promocao>
                <p>
                    FAÇA SUA INSCRIÇÃO E COMECE HOJE MESMO
                </p>
                <h1>
                    De R$ 397,00
                </h1>
                <p>
                    <span style={{ color: '#ffdebf' }}>Por 11x de 5,38</span> ou R$ 49,80 à vista
                </p>
                <h2>
                    <u>Promoção expira em 1 semana!</u>
                </h2>
                <Button 
                title='SIM, QUERO COMEÇAR AGORA!'
                />
            </Promocao>
        </DermatoContainer>
    )
}