import { CaretDown, CaretRight, Trash } from "phosphor-react";
import { ComentarioStruture } from "./comentario";
import { Answer, ButtonOpenDesc, ComentariosContainer, ComentariosContent, ComentariosSession, Feedback, RemoveButton, Response, SecondAnswer, SetButton, SetComent, SetFeedback, Showanswer, Title } from "./styles";
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Avatar from '../../../../assets/avatar.webp'
import { useEffect, useState } from "react";
import Perfil1 from '../../../../assets/perfil1.webp'
import Perfil2 from '../../../../assets/perfil2.webp'
import Perfil3 from '../../../../assets/perfil3.webp'
import Perfil4 from '../../../../assets/perfil4.webp'
import Perfil5 from '../../../../assets/perfil5.webp'
import Perfil6 from '../../../../assets/perfil6.webp'
import Perfil7 from '../../../../assets/perfil7.webp'
import Perfil8 from '../../../../assets/perfil8.webp'
import Perfil9 from '../../../../assets/perfil9.webp'
import Perfil10 from '../../../../assets/perfil10.webp'
import Perfil11 from '../../../../assets/perfil11.webp'
import Perfil12 from '../../../../assets/perfil12.webp'
import Perfil13 from '../../../../assets/perfil13.webp'
import Perfil14 from '../../../../assets/perfil14.webp'
import Perfil15 from '../../../../assets/perfil15.webp'
import Perfil16 from '../../../../assets/perfil16.webp'
import Perfil17 from '../../../../assets/perfil17.webp'
import Perfil18 from '../../../../assets/perfil18.webp'
import Perfil19 from '../../../../assets/perfil19.webp'
import Perfil20 from '../../../../assets/perfil20.webp'
import Perfil21 from '../../../../assets/perfil21.webp'
import Perfil22 from '../../../../assets/perfil22.webp'
import Perfil23 from '../../../../assets/perfil23.webp'
import Perfil24 from '../../../../assets/perfil24.webp'
import Perfil25 from '../../../../assets/perfil25.webp'
import Perfil26 from '../../../../assets/perfil26.webp'
import Perfil27 from '../../../../assets/perfil27.webp'


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

export function Comentarios({ chatRef }) {

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

    const removeFeedback = (comment) => {
        const newArrayComments = comments.filter(commentToRemove => commentToRemove.comment == comment)
        setComments(newArrayComments)
    }

    const handleAddNewFeedback = () => {
        setComments([
            ...comments,
            {
                comment,
                date: new Date()
            }
        ])
        setComment("")
    }


    return (

        <ComentariosContainer ref={chatRef}>

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


                                <SetFeedback key={comment.comment}>

                                    <Feedback>
                                        <ComentarioStruture
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
                            src={Perfil1}
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
                            src={Perfil2}
                            title={'Helena Costa'}
                            desc={'Cronograma capilar é VIDAAA! Simplesmente apaixonada no meu cabelo crescendo! Meu cabelo caia muito e não tinha vida e agora está super saudável Meninas da pra cuidar dos cabelos em casa SIM, é preciso ter muita dedicação e amor que dá certo e eu sou a prova disso..'}
                            time={formatDistanceToNow(date4, {
                                locale: ptBR,
                            })}
                            ammount={0}
                        />
                    }

                    {time3 &&
                        <DepoimentoBoxFinal
                            src={Perfil3}
                            title={'Roberta Paixão'}
                            desc={'Enviar esse vídeo e marcar as tricologistas da minha cidade pra ver se aprendem alguma coisa, pois eles só sabem passar hidratação, shampoos e condicionadoes caros e não resolvem o problema e ficamos refém deles, parabéns doutora excelente método, com certeza ajudou muito a todos nós 👏👏'}
                            time={formatDistanceToNow(date3, {
                                locale: ptBR,
                            })}
                            ammount={0}
                        />
                    }

                    {time2 &&
                        <DepoimentoBoxFinal
                            src={Perfil4}
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
                            src={Perfil5}
                            title={'Angela Cristo'}
                            desc={'Depois desse vídeo minha vida mudou do dia pra noite!! Obrigada pelo cronograma Paula... Deus te abençoe'}
                            time={formatDistanceToNow(date1, {
                                locale: ptBR,
                            })}
                            ammount={0}
                        />
                    }

                    <DepoimentoBoxFinal
                        src={Perfil6}
                        title={'Rafaela Borges'}
                        desc={'Eu já ia fechar a página, ainda bem que assisti até o final! Obrigada pelo cronograma Paula'}
                        time={'1 hora'}
                        ammount={49}
                        haveAnswer

                    >
                        <Answer>
                            <ComentarioStruture
                                src={Perfil7}
                                title={'Bainca Correia'}
                                desc={'kkkkkkk eu também estava quase fechando, ufaa'}
                                time={'1 hora'}
                                ammount={29}
                            />
                        </Answer>
                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Perfil8}
                        title={'Brenda Marques'}
                        desc={`Alguém aí de ${location.city == 'undefined' ? 'São Paulo' : location.city} que já testou pode me dizer se funciona?`}
                        time={'2 horas'}
                        ammount={67}
                        haveAnswer
                    >

                        <div>

                            <Answer>
                                <ComentarioStruture
                                    src={Perfil9}
                                    title={'Julia Campos'}
                                    desc={`oii Brenda, siim eu sou de ${location.city} tmb. Tava desconfiada mas testei e funcionou sim!`}
                                    time={'1 hora'}
                                    ammount={49}
                                />
                            </Answer>
                            <SecondAnswer>
                                <ComentarioStruture
                                    src={Perfil10}
                                    title={'Brenda Marques'}
                                    desc={'Obgdaa!! Vou testar então'}
                                    time={'1 hora'}
                                    ammount={32}
                                />
                            </SecondAnswer>

                        </div>

                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Perfil11}
                        title={'Marcela Rodrigues'}
                        desc={'Melhor escolha da minha vida, meu cabelo está crescendo muito, to amando o resultado, já senti diferença na primeira semana, incrível!!'}
                        time={'3 horas'}
                        ammount={65}
                    />

                    <DepoimentoBoxFinal
                        src={Perfil12}
                        title={'Josiane Moraes'}
                        desc={'Vi muita gente comentando e compartilhando, deve funcionar'}
                        time={'5 horas'}
                        ammount={84}
                    />


                    <DepoimentoBoxFinal
                        src={Perfil13}
                        title={'Renata Rios'}
                        desc={'Recomendo, duas semanas de uso e meu cabelo já cresceu'}
                        time={'7 horas'}
                        ammount={76}
                        haveAnswer
                    >

                        <div>

                            <Answer>
                                <ComentarioStruture
                                    src={Perfil14}
                                    title={'Julia Campos'}
                                    desc={'Sério???'}
                                    time={'7 horas'}
                                    ammount={111}
                                />
                            </Answer>
                            <SecondAnswer>
                                <ComentarioStruture
                                    src={Perfil15}
                                    title={'Paula R.'}
                                    desc={'Funciona mesmo??'}
                                    time={'6 horas'}
                                    ammount={56}
                                />
                            </SecondAnswer>
                            <SecondAnswer>
                                <ComentarioStruture
                                    src={Perfil16}
                                    title={'Renata Rios'}
                                    desc={'SIM!! podem confiar'}
                                    time={'4 horas'}
                                    ammount={46}
                                />
                            </SecondAnswer>
                            <SecondAnswer>
                                <ComentarioStruture
                                    src={Perfil17}
                                    title={'Ivete Fernandes'}
                                    desc={'vou usar então, não aguento mais sofrer com isso, meu cabelo está muito quebradiço'}
                                    time={'3 horas'}
                                    ammount={54}
                                />
                            </SecondAnswer>
                            <SecondAnswer>
                                <ComentarioStruture
                                    src={Perfil18}
                                    title={'Renata Rios'}
                                    desc={'Podem confiar, já notei diferença, e ainda to na segunda semana!'}
                                    time={'1 hora'}
                                    ammount={32}
                                />
                            </SecondAnswer>

                        </div>
                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Perfil19}
                        title={'Barbara Oliveira'}
                        desc={'Meninaaas que cronograma é esse, meu cabelo é completamente outro kkk. Só a gente sabe como isso afeta nossa autoestima'}
                        time={'8 horas'}
                        ammount={126}
                    />

                    <DepoimentoBoxFinal
                        src={Perfil20}
                        title={'Cristiane Vargas'}
                        desc={'Eu sou de Manaus e funcionou muito bem nessa região úmida, tanto eu como minha cunhada tinhamos o cabelo muito ressecado, seguimos o passo a passo do cronograma e tivemos resultados bem rápido, e olha que antes disso eu e ela já tinhamos gastado muito dinheiro e nada funcionava!!'}
                        time={'10 horas'}
                        ammount={62}
                        haveAnswer

                    >
                        <Answer>
                            <ComentarioStruture
                                src={Perfil21}
                                title={'Gabriela Fogaça'}
                                desc={`Mesmo aqui em ${location.city} o método funciona, faz 2 meses q testei o método e meu cabelo nunca foi tão grande`}
                                time={'8 horas'}
                                ammount={72}
                            />
                        </Answer>
                        <SecondAnswer>
                            <ComentarioStruture
                                src={Perfil22}
                                title={'Miriam Costa'}
                                desc={'Aqui em Brasília tb funcionou muito bem, apesar da secura da região. Estou a um mês usando o cronograma. Só gratidão'}
                                time={'4 horas'}
                                ammount={23}
                            />
                        </SecondAnswer>
                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Perfil23}
                        title={'Andreia Lima'}
                        desc={'Coitado de quem ainda não descobriu esse cronograma kakakaka vai sofrer o resto da vida '}
                        time={'11 horas'}
                        ammount={88}
                    />

                    <DepoimentoBoxFinal
                        src={Perfil24}
                        title={'Luciana Oliveira'}
                        desc={'Super apaixonada, meu cabelo ficou mega hidratado e super brilhoso, fui em uma reunião no domingo a noite e muitos perguntaram o que eu tinha feito no cabelo que estava tão brilhoso...'}
                        time={'13 horas'}
                        ammount={102}
                    >
                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Perfil25}
                        title={'Sara Moscato'}
                        desc={'De cara não ia testar esse cronograma, ainda bem que decidi dar essa chance, pois já tinha tentado de tudo e nada funcionava, achei que esse fosse mais um daqueles produtos que prometem ser milagrosos mas não funcionam'}
                        time={'13 horas'}
                        ammount={154}
                        haveAnswer

                    >
                        <Answer>
                            <ComentarioStruture
                                src={Perfil26}
                                title={'Graciele Serra'}
                                desc={'Mas funciona mesmo????'}
                                time={'9 horas'}
                                ammount={64}
                            />
                        </Answer>
                        <SecondAnswer>
                            <ComentarioStruture
                                src={Perfil27}
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