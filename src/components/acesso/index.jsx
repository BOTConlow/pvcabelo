import { AcessoContainer, Image, Texts } from "./style";
import Celular from '../../assets/celular2.png'
import { Button } from "../button";


export function Acesso() {

    return (
        <AcessoContainer>
            <Image>
                <img
                    src={Celular}
                />
            </Image>
            <Texts>
                <h1>
                    VOCÊ VAI TER ACESSO AO CRONOGRAMA CAPILAR NA PALMA DA SUA MÃO!
                </h1>
                <p>
                    Tudo de forma fácil e organizada para você simplesmente começar e já ter resultados.
                </p>
                <p>
                    Existem diversos produtos no mercado que prometem melhorar a saúde e aparência do cabelo rapidamente. Produtos que contém substâncias químicas agressivas que podem prejudicar a saúde do cabelo a longo prazo. E que provocam o tão conhecido Efeito Rebote, onde os cabelos parecem estar mais saudáveis enquanto os produtos estão sendo usados, mas assim que param de usar, os problemas capilares retornam com mais intensidade. Isso acontece porque os fios não estão preparados para lidar com essas substâncias químicas agressivas.</p>
                <p>
                    <b>Com o cronograma, você restaura a seu cabelo de forma natural e permanente!</b>
                </p>
                <Button
                    href='#'
                    title='SIM, QUERO ACESSAR O CRONOGRAMA CAPILAR'
                />
            </Texts>
        </AcessoContainer>
    )
}