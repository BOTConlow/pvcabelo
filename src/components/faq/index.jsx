import { CaretDown, CaretLeft } from "phosphor-react";
import { useState } from "react";
import { Content, Desc, FaqContainer, Headline, Title } from "./styles";


export function Duvidas() {
    return (

        <Content>

            <Headline>
                <h1>
                    PERGUNTAS <span style={{ color: '#c9ae95' }}>FREQUENTES</span>
                </h1>
            </Headline>

            <Faq title='Em quanto tempo terei resultados?' desc='Aplicando tudo que você vai aprender diariamente e direitinho, você conseguirá ver resultados mínimos em até 10 dias, mas os resultados completos são a partir dos 25 dias de tratamento.' />
            <Faq title='Vou precisar comprar algo a mais para participar do Cronograma?' desc='Não. Tudo que você vai precisar você já tem em casa ou no máximo na feira do seu bairro ou no supermercado que você faz suas compras.' />
            <Faq title='Será que o conteúdo não é técnico demais?' desc='Não. Dentro do desafio tudo é explicado de forma muito simples sem explicação complicada de médico.' />
            <Faq title='Há alguma contraindicação?' desc='Não há contraindicações, é para qualquer pessoa, independentemente da idade, sexo ou se tem algum problema de saúde. ' />
            <Faq title='Tem alguma garantia?' desc='Sim! Você terá 30 dias de garantia após o recebimento do seu acesso. Caso você não se adapte, você poderá pedir o reembolso total.' />
            <Faq title='Como receberei acesso ao Cronograma Capilar?' desc='Após o pagamento, você receberá instantaneamente em seu e-mail as informações e dados de acesso a nossa Área de Membros na Hotmart, onde você encontrará todos os produtos disponíveis.' />
            <Faq title='Quais são as formas de pagamento?' desc='São 3 formas que você pode escolher: Cartão de crédito (parcelamos em até 12x), Boleto ou Pix. Pagando no Cartão de Crédito ou no Pix, o acesso ao Cronograma é liberado instantaneamente. ' />



        </Content>
    )
}


export function Faq({ title, desc }) {

    const [openDesc, setOpenDesc] = useState(false)

    const handleOpenDesc = () => setOpenDesc(!openDesc)

    return (

        <FaqContainer>
            <Title onClick={handleOpenDesc}>

                <h1 style={{ color: '#fff' }}>{title}</h1>
                <button>
                    {openDesc ? <CaretDown size={25} /> : <CaretLeft size={25} />}
                </button>

            </Title>

            {
                openDesc &&
                <Desc>

                    <p>{desc}</p>

                </Desc>
            }
        </FaqContainer>
    )
}