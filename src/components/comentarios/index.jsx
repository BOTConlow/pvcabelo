import { CaretDown, Trash } from "phosphor-react";
import { ComentarioStruture } from "./comentario";
import { ComentariosContainer, ComentariosContent, ComentariosSession, Feedback, RemoveButton, SetButton, SetComent, SetFeedback, Title } from "./styles";
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Avatar from '../../assets/avatar.webp'
import { useState } from "react";


export function Comentarios({ ref }) {

    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])

    const removeFeedback = () => {

    }

    const handleAddNewFeedback = () => {
        setComments([
            ...comments,
            {
                comment,
                date: new Date()
            }
        ])
    }


    return (

        <ComentariosContainer>

            <Title>
                <h1>
                    VEJA O QUE ESTÃO FALANDO <span style={{ color: '#4c2d2d' }}><u>AGORA</u> NO NOSSO CHAT ONLINE</span>
                </h1>
            </Title>

            <ComentariosContent>

                <Title>
                    <h2><u>Mais recentes</u></h2>
                    <CaretDown size={20} />
                </Title>

                <ComentariosSession>

                    {
                        comments.map(comment => {

                            return (


                                <SetFeedback>

                                    <Feedback>
                                        <ComentarioStruture
                                            key={comment.comment}
                                            src={Avatar}
                                            title={'Usuário Anônimo'}
                                            desc={comment.comment}
                                            time={formatDistanceToNow(comment.date, {
                                                locale: ptBR
                                            })}
                                            ammount={0}
                                        />
                                    </Feedback>

                                    <RemoveButton onClick={() => removeFeedback(comment)} >
                                        <Trash size={24} />
                                    </RemoveButton>

                                </SetFeedback>
                            )

                        })
                    }

                    <ComentarioStruture
                        src={Avatar}
                        title={'Sara Moscato'}
                        desc={'Sim, pode confiar!'}
                        time={'7 horas'}
                        ammount={96}
                    />

                </ComentariosSession>

                <SetComent>

                    <h1>
                        Escreva um comentário
                    </h1>
                    <textarea
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        placeholder="Deixe seu comentario..."
                    />
                    <SetButton
                        disabled={!comment}
                        onClick={handleAddNewFeedback}
                    >
                        Publicar
                    </SetButton>

                </SetComent>

            </ComentariosContent>

        </ComentariosContainer>
    )
}