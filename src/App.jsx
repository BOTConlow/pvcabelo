import { useEffect, useRef, useState } from "react"
import { Acesso } from "./components/acesso"
import { Background } from "./components/backgrounds"
import { Beneficios } from "./components/beneficios"
import { Bonus } from "./components/bonus"
import { Comentarios } from "./components/comentarios"
import { Depoimentos } from "./components/depoimentos"
import { Dermatologista } from "./components/dermatologista"
import { Duvidas } from "./components/faq"
import { GrupoVip } from "./components/grupo"
import { Header } from "./components/header"
import { Passos } from "./components/passos"
import { Quantovale } from "./components/quantovale"
import { Vsl } from "./components/vsl"
import { Whatsapp } from "./components/whatsapp"
import { Container } from "./styles/app.styles"

function App() {

  const chatRef = useRef()
  const tratamentosRef = useRef()
  const depoimentosRef = useRef()
  const draRef = useRef()
  const grupoRef = useRef()
  const [time, setTime] = useState(false)

  useEffect(() => {

    setTimeout(() => {

      setTime(true)

    }, 747000)

  }, [])


  return (
    <div>

      <Background bgImage='background2'>
        <Container>
          <Header
            chatRef={chatRef}
            tratamentosRef={tratamentosRef}
            depoimentosRef={depoimentosRef}
            draRef={draRef}
            grupoRef={grupoRef}
          />
        </Container>
      </Background>

      <Whatsapp />

      <Background bgImage='background1'>
        <Container>
          <Vsl />
        </Container>
      </Background>

      <Container>
        <Comentarios chatRef={chatRef} />
      </Container>

      <Background bgImage='background3'>
        <Container>
          <Depoimentos depoimentosRef={depoimentosRef} />
        </Container>
      </Background>

      <Container>
        <Beneficios tratamentosRef={tratamentosRef} />
        <Passos />
      </Container>

      <Background bgImage='background3'>
        <Container>
          <Acesso />
        </Container>
      </Background>

      <Container>
        <Dermatologista draRef={draRef} />
        <Bonus />
      </Container>

      <Background bgImage='background3'>
        <Container>
          <GrupoVip grupoRef={grupoRef} />
        </Container>
      </Background>

      {time && <>
        <Container>
          <Quantovale />
        </Container>
      </>}

      <Background bgImage='background3'>
        <Container>
          <Duvidas />
        </Container>
      </Background>

    </div>
  )
}

export default App
