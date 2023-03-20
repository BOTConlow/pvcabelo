import { Content, PassosContainer, Textcontent } from "./styles";
import icone1 from '../../assets/icone1.webp'
import icone2 from '../../assets/icone2.webp'
import icone3 from '../../assets/icone3.webp'


const texts = [{
    image: icone1,
    title: 'PASSO 1 - Fazendo o Cronograma',
    desc: 'Você acessará algumas receitas para tratar a sua baixa temperatura corporal, fazendo com que seu cabelo cressa muito mais e aprenderá um cronograma com ingredientes caseiros para hidratar seu cabelo.'

}, {
    image: icone2,
    title: 'PASSO 2 - Cuidando Dos Resultados',
    desc: 'Saiba como cuidar do seu cabelo para que seus resultados sejam rápidos e duradouros, tenho relatos de várias mulheres já tiveram alguma experiência de fazer um tratamento e perder todos os resultados por não saber cuidar do cabelo.'
}, {
    image: icone3,
    title: 'PASSO 3 - Desfrutando',
    desc: 'Aqui é onde você estará colhendo todos os resultados do cronograma, seu cabelo estará grande, crescendo rápido, saudável e muito hidratado, e pode ter certeza que muitos vão estar te perguntando o que você esta fazendo no cabelo.'
}]

export function Passos() {

    return (
        <PassosContainer>

            <h1>Quais os passos pra chegar no <span style={{ color: '#573333' }}>cabelo dos seus sonhos?</span></h1>

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