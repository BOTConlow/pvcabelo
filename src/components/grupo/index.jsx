import { Content, GrupoContainer, Text } from "./styles";
import Grupo from '../../assets/grupovip.webp'
import { ChatsCircle, Star } from "phosphor-react";
import { Button } from "../button";


export function GrupoVip() {

    return (
        <GrupoContainer>
            <Content>
                <div>
                    <h1>
                        Interação E Motivação No Grupo VIP
                    </h1>
                    <Text>
                        <div>
                            <Star size={70} weight='fill' />
                        </div>
                        <div>
                            <h1>
                                Sua ajuda diária
                            </h1>
                            <p>
                                Você não vai estar sozinha. Tire todas as dúvidas sobre o conteúdo que podem surgir durante a sua jornada e interaja com as outras participantes. #TodasJuntas
                            </p>
                        </div>
                    </Text>
                    <Text>
                        <div>
                            <ChatsCircle size={70} weight='fill' />
                        </div>
                        <div>
                            <h1>
                                Inspire outras mulheres
                            </h1>
                            <p>
                                Você pode postar seus resultados, pratos e como está se sentindo. Faça parte da nossa comunidade com mais de 8 mil pessoas com o mesmo objetivo que você: Alcançar o peso ideal e o corpo dos nossos sonhos.                            </p>
                        </div>
                    </Text>
                </div>
                <div>
                    <img
                        src={Grupo}
                    />
                </div>
            </Content>

            <Button
                title='SIM, QUERO ACESSAR O CRONOGRAMA CAPILAR'
            />

        </GrupoContainer>
    )
}