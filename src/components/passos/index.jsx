import { Content, PassosContainer, Textcontent } from "./styles";
import icone1 from '../../assets/icone1.webp'
import icone2 from '../../assets/icone2.webp'
import icone3 from '../../assets/icone3.webp'


const texts = [{
    image: icone1,
    title: 'PASSO 1 - O que é acne. Quem são os inimigos?',
    desc: 'O PPP induz todos os praticantes do método a entender antes o que são as espinhas, quais seus graus, suas causas e suas consequências além da estética. Pois somente assim conseguimos tratar a raiz do problema da acne'

}, {
    image: icone2,
    title: 'PASSO 2 - Preparando o terreno. (Início do Protocolo).',
    desc: 'No começo do processo do PPP, é importante prepararmos a pele para que o tratamento seja rápido e não venhamos sofrer com o tão temido efeito rebote. São procedimentos simples, práticos e fáceis que farão toda a diferença.'
}, {
    image: icone3,
    title: 'PASSO 3 - Continue no caminho.',
    desc: 'De maneira muito rápida, é aqui onde tudo muda. Você inciará de fato o protocolo, no qual se consiste em um passo a passo simples e natural, de no máximo 10 dias. Porém, antes mesmo de começa-lo, você notará grandes resultados logo nos primeiros dias de "Aquecimento".'
}]

export function Passos() {

    return (
        <PassosContainer>

            <h1>Quais os passos pra chegar no <span style={{ color: '#573333' }}>cabelo de rapunzel?</span></h1>

            <Content>

                {texts.map((item, index) => (
                    <Textcontent key={item.title}>
                        <div>
                            <img
                                src={item.image}
                            />
                        </div>
                        <div>
                            <h1> {item.title} </h1>
                            <p> {item.desc} </p>
                        </div>
                    </Textcontent>
                ))}

            </Content>

        </PassosContainer>
    )
}