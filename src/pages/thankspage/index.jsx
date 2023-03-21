import { TextContent, ThanksContent } from "./styles";
import Image from '../../assets/thanks.png'
import { Container } from "../../styles/app.styles"


export function ThanksPage() {

    return (
        <Container>
            <ThanksContent>
                <div>
                    <img
                        src={Image}
                    />
                </div>
                <TextContent>
                    <h1>
                        Parabéns Pela Compra Deste Produto!
                    </h1>
                    <p>
                        O seu produto foi enviado e deve chegar em seu e-mail em poucos minutos!
                    </p>
                    <p>
                        Lembre-se: Se você está procurando resultado, terá que seguir o passo a passo deste produto.
                    </p>
                    <p>
                        Aproveitem esta oportunidade! E memorize uma coisa: Tudo depende de você! A culpa sempre será sua por estar onde você está.
                    </p>
                    <p>
                        Boa sorte, Encompassworkshop
                    </p>
                </TextContent>
            </ThanksContent>
        </Container>
    )
}