import Dermato from '../../assets/Dermatologista.webp'
import { DermatoContainer, Promocao, Texts } from './styles'
import { Button } from "../button";


export function Dermatologista({ draRef }) {

    return (
        <DermatoContainer ref={draRef}>
            <Texts>
                <div>
                    <h1>
                        Conheça sua <span style={{ color: '#4c2d2d' }}>dermatologista</span>
                    </h1>
                    <p style={{ fontSize: '1.5rem' }}>
                        <span style={{ color: '#c9ae95' }}><b>Dra. PAULA ANDRADE</b></span>
                    </p>
                    <p>
                        A tricologia é uma especialidade médica que trata de problemas relacionados ao couro cabeludo e cabelo. Com anos de experiência e especialização, a Dra. Paula Andrade é uma renomada médica tricologista, formada pela Faculdade de Medicina da Universidade de São Paulo (USP) e membro da Sociedade Brasileira de Tricologia.
                    </p>
                    <p>
                        "Eu desenvolvi o Fórmula Cronograma Capilar com objetivo principal de ajudar as pessoas. Confie na minha experiência e especialização e experimente o Fórmula Cronograma Capilar. Seu cabelo merece o melhor, e essa é a solução definitiva para isso."
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