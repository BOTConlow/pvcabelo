import { CaretDown, CaretRight, Trash } from "phosphor-react";
import { ComentarioStruture } from "./comentario";
import { Answer, ButtonOpenDesc, ComentariosContainer, ComentariosContent, ComentariosSession, Feedback, RemoveButton, Response, SecondAnswer, SetButton, SetComent, SetFeedback, Showanswer, Title } from "./styles";
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Avatar from '../../assets/avatar.webp'
import { useEffect, useState } from "react";


export function DepoimentoBoxFinal(props) {
    const { haveAnswer } = props
    const [openDesc, setOpenDesc] = useState(false)
    const handleOpenDesc = () => setOpenDesc(!openDesc)

    return (
        <Response>

            <div>
                <ComentarioStruture
                    src={props.src}
                    title={props.title}
                    desc={props.desc}
                    time={props.time}
                    ammount={props.ammount}
                />

                {
                    haveAnswer &&
                    <Showanswer>
                        <ButtonOpenDesc onClick={handleOpenDesc}>
                            {openDesc ? <p>Esconder respostas</p> : <p>Mostrar respostas</p>}
                            {openDesc ? <CaretDown size={15} /> : <CaretRight size={15} />}
                        </ButtonOpenDesc>
                    </Showanswer>
                }
            </div>

            {
                openDesc && props.children
            }
        </Response>

    )

}

export function Comentarios({ ref }) {

    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])
    const [location, setLocation] = useState({})
    const [time1, setTime1] = useState(false)
    const [time2, setTime2] = useState(false)
    const [time3, setTime3] = useState(false)
    const [time4, setTime4] = useState(false)
    const [time5, setTime5] = useState(false)
    const [date1, setDate1] = useState(new Date())
    const [date2, setDate2] = useState(new Date())
    const [date3, setDate3] = useState(new Date())
    const [date4, setDate4] = useState(new Date())
    const [date5, setDate5] = useState(new Date())

    useEffect(() => {

        setTimeout(() => {

            setTime1(true)
            setDate1(new Date())

        }, 30000)

    }, [])

    useEffect(() => {

        setTimeout(() => {

            setTime2(true)
            setDate2(new Date())

        }, 230000)

    }, [])

    useEffect(() => {

        setTimeout(() => {

            setTime3(true)
            setDate3(new Date())

        }, 480000)

    }, [])

    useEffect(() => {

        setTimeout(() => {

            setTime4(true)
            setDate4(new Date())

        }, 630000)

    }, [])

    useEffect(() => {

        setTimeout(() => {

            setTime5(true)
            setDate5(new Date())

        }, 780000)

    }, [])

    useEffect(() => {

        const fetchLocation = async () => {

            await fetch('https://ipinfo.io/json?token=57f3d1eb815176')
                .then((response) => response.json())
                .then((data) => (setLocation(data)))

        }

        fetchLocation()
    }, [])

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

                    {time5 &&
                        <DepoimentoBoxFinal
                            src={Avatar}
                            title={'Debora Souzine'}
                            desc={'Estava esperando por isso a anooooos!! mt obgdaaaaaa, acho que foi o destino cair aqui, vou comprar agora!'}
                            time={formatDistanceToNow(date5, {
                                locale: ptBR,
                            })}
                            ammount={0}
                        />
                    }

                    {time4 &&
                        <DepoimentoBoxFinal
                            src={Avatar}
                            title={'Helena Costa'}
                            desc={'Eu usei roacutan como última alternativa depois de 4 anos sofrendo com acne severa. rémedio super pesado q amenizou as acnes mas me criou muitos problemas, ele tem muitos efeitos colaterais. Porém após minha gestação voltei a ter acne, mas em 4 semanas usando esse método voltei a ter o rosto limpo novamente. MUITO OBRIGADA DRA!'}
                            time={formatDistanceToNow(date4, {
                                locale: ptBR,
                            })}
                            ammount={0}
                        />
                    }

                    {time3 &&
                        <DepoimentoBoxFinal
                            src={Avatar}
                            title={'Roberta Paixão'}
                            desc={'Enviar esse vídeo e marcar os salões da minha cidade pra ver se aprendem alguma coisa, pois eles só sabem passar hidratação, shampoos e condicionadoes caros e não resolvem o problema e ficamos refém deles, parabéns doutora excelente método, com certeza ajudou muito a todos nós 👏👏'}
                            time={formatDistanceToNow(date3, {
                                locale: ptBR,
                            })}
                            ammount={0}
                        />
                    }

                    {time2 &&
                        <DepoimentoBoxFinal
                            src={Avatar}
                            title={'Barbara Souza'}
                            desc={'eu assisti esse vídeo meses atrás e tô voltando aqui agora pra agradecer, meu cabelo sempre foi ressecado e quebradiço, por isso nunca conseugi deixar ele muito grande, se não fosse por você eu ainda estaria estaria assim, sou MUITO grata porque agora finalmente eu consigo me olhar no espelho e me achar bonita, só nós mulheres entendemos como isso nos afeta'}
                            time={formatDistanceToNow(date2, {
                                locale: ptBR,
                            })}
                            ammount={0}
                        />
                    }

                    {time1 &&
                        <DepoimentoBoxFinal
                            src={Avatar}
                            title={'Angela Cristo'}
                            desc={'Depois desse vídeo minha vida mudou do dia pra noite!! Obrigada pelo protocolo Paula... Deus te abençoe'}
                            time={formatDistanceToNow(date1, {
                                locale: ptBR,
                            })}
                            ammount={0}
                        />
                    }

                    <DepoimentoBoxFinal
                        src={Avatar}
                        title={'Rafaela Borges'}
                        desc={'Eu já ia fechar a página, ainda bem que assisti até o final! Obrigada pelo protocolo Paula'}
                        time={'1 hora'}
                        ammount={49}
                        haveAnswer

                    >
                        <Answer>
                            <ComentarioStruture
                                src={Avatar}
                                title={'Bainca Correia'}
                                desc={'kkkkkkk eu também estava quase fechando, ufaa'}
                                time={'1 hora'}
                                ammount={29}
                            />
                        </Answer>
                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Avatar}
                        title={'Brenda Marques'}
                        desc={`Alguém aí de ${location.city == 'undefined' ? 'São Paulo' : location.city} que já testou pode me dizer se funciona?`}
                        time={'2 horas'}
                        ammount={67}
                        haveAnswer
                    >

                        <div>

                            <Answer>
                                <ComentarioStruture
                                    src={Avatar}
                                    title={'Julia Campos'}
                                    desc={`oii Brenda, siim eu sou de ${location.city} tmb. Tava desconfiada mas testei e funcionou sim!`}
                                    time={'1 hora'}
                                    ammount={49}
                                />
                            </Answer>
                            <SecondAnswer>
                                <ComentarioStruture
                                    src={Avatar}
                                    title={'Brenda Marques'}
                                    desc={'Obgdaa!! Vou testar então'}
                                    time={'1 hora'}
                                    ammount={32}
                                />
                            </SecondAnswer>

                        </div>

                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Avatar}
                        title={'Marcela Rodrigues'}
                        desc={'Melhor escolha da minha vida, meu cabelo está crescendo muito, to amando o resultado, já senti diferença na primeira semana, incrível!!'}
                        time={'3 horas'}
                        ammount={65}
                    />

                    <DepoimentoBoxFinal
                        src={Avatar}
                        title={'Josiane Moraes'}
                        desc={'Vi muita gente comentando e compartilhando, deve funcionar'}
                        time={'5 horas'}
                        ammount={84}
                    />


                    <DepoimentoBoxFinal
                        src={Avatar}
                        title={'Renata Rios'}
                        desc={'Recomendo, duas semanas de uso e meu cabelo já cresceu'}
                        time={'7 horas'}
                        ammount={76}
                        haveAnswer
                    >

                        <div>

                            <Answer>
                                <ComentarioStruture
                                    src={Avatar}
                                    title={'Julia Campos'}
                                    desc={'Sério???'}
                                    time={'7 horas'}
                                    ammount={111}
                                />
                            </Answer>
                            <SecondAnswer>
                                <ComentarioStruture
                                    src={Avatar}
                                    title={'Paula R.'}
                                    desc={'Funciona mesmo??'}
                                    time={'6 horas'}
                                    ammount={56}
                                />
                            </SecondAnswer>
                            <SecondAnswer>
                                <ComentarioStruture
                                    src={Avatar}
                                    title={'Renata Rios'}
                                    desc={'SIM!! podem confiar'}
                                    time={'4 horas'}
                                    ammount={46}
                                />
                            </SecondAnswer>
                            <SecondAnswer>
                                <ComentarioStruture
                                    src={Avatar}
                                    title={'Ivete Fernandes'}
                                    desc={'vou usar então, não aguento mais sofrer com isso, meu cabelo está muito quebradiço'}
                                    time={'3 horas'}
                                    ammount={54}
                                />
                            </SecondAnswer>
                            <SecondAnswer>
                                <ComentarioStruture
                                    src={Avatar}
                                    title={'Renata Rios'}
                                    desc={'Podem confiar, já notei diferença, e ainda to na segunda semana!'}
                                    time={'1 hora'}
                                    ammount={32}
                                />
                            </SecondAnswer>

                        </div>
                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Avatar}
                        title={'Barbara Oliveira'}
                        desc={'Meninaaas que cronograma é esse, meu cabelo é completamente outro kkk. Só a gente sabe como isso afeta nossa autoestima'}
                        time={'8 horas'}
                        ammount={126}
                    />

                    <DepoimentoBoxFinal
                        src={Avatar}
                        title={'Cristiane Vargas'}
                        desc={'Eu sou de Manaus e funcionou muito bem nessa região úmida, tanto eu como minha cunhada tinhamos o cabelo muito ressecado, seguimos o passo a passo do cronograma e tivemos resultados bem rápido, e olha que antes disso eu e ela já tinhamos gastado muito dinheiro e nada funcionava!!'}
                        time={'10 horas'}
                        ammount={62}
                        haveAnswer

                    >
                        <Answer>
                            <ComentarioStruture
                                src={Avatar}
                                title={'Gabriela Fogaça'}
                                desc={`Mesmo aqui em ${location.city} o método funciona, faz 2 meses q testei o método e meu cabelo nunca foi tão grande`}
                                time={'8 horas'}
                                ammount={72}
                            />
                        </Answer>
                        <SecondAnswer>
                            <ComentarioStruture
                                src={Avatar}
                                title={'Miriam Costa'}
                                desc={'Aqui em Brasília tb funcionou muito bem, apesar da secura da região. Estou a um mês usando o cronograma. Só gratidão'}
                                time={'4 horas'}
                                ammount={23}
                            />
                        </SecondAnswer>
                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Avatar}
                        title={'Andreia Lima'}
                        desc={'Coitado de quem ainda não descobriu esse cronograma kakakaka vai sofrer o resto da vida '}
                        time={'11 horas'}
                        ammount={88}
                    />

                    <DepoimentoBoxFinal
                        src={Avatar}
                        title={'Luciana Oliveira'}
                        desc={'Estou sofrendo com o cabelo quebradiço. Tenho 29 anos, de um tempo pra cá meu cabelo vive quebrando e está muito ressecado. Ja tentei resolver isso com vários tipos de hidratação, condicionadores caros mas não funcionou, mas só duas semanas aplicando esse cronograma já percebi uma melhroa significativa'}
                        time={'13 horas'}
                        ammount={102}
                    >
                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Avatar}
                        title={'Sara Moscato'}
                        desc={'De cara não ia testar esse cronograma, ainda bem que decidi dar essa chance, pois já tinha tentado de tudo e nada funcionava, achei que esse fosse mais um daqueles produtos que prometem ser milagrosos mas não funcionam'}
                        time={'13 horas'}
                        ammount={154}
                        haveAnswer

                    >
                        <Answer>
                            <ComentarioStruture
                                src={Avatar}
                                title={'Graciele Serra'}
                                desc={'Mas funciona mesmo????'}
                                time={'9 horas'}
                                ammount={64}
                            />
                        </Answer>
                        <SecondAnswer>
                            <ComentarioStruture
                                src={Avatar}
                                title={'Sara Moscato'}
                                desc={'Sim, pode confiar! Já tive um bom resultado em poucas semanas.'}
                                time={'7 horas'}
                                ammount={96}
                            />
                        </SecondAnswer>

                    </DepoimentoBoxFinal>

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