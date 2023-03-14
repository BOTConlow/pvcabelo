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

  return (
    <div>

      <Background bgImage='background2'>
        <Container>
          <Header />
        </Container>
      </Background>

        <Whatsapp />

      <Background bgImage='background1'>
        <Container>
          <Vsl />
        </Container>
      </Background>

      <Container>
        <Comentarios />
      </Container>

      <Background bgImage='background3'>
        <Container>
          <Depoimentos />
        </Container>
      </Background>

      <Container>
        <Beneficios />
        <Passos />
      </Container>

      <Background bgImage='background3'>
        <Container>
          <Acesso />
        </Container>
      </Background>

      <Container>
        <Dermatologista />
        <Bonus />
      </Container>

      <Background bgImage='background3'>
        <Container>
          <GrupoVip />
        </Container>
      </Background>

      <Container>
        <Quantovale />
      </Container>

      <Background bgImage='background3'>
        <Container>
          <Duvidas />
        </Container>
      </Background>

    </div>
  )
}

export default App
