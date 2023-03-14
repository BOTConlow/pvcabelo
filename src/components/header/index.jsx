import { HeaderContainer, HeaderContents, Contact, Instagram, ButtonContent } from "./styles";
import Logo from '../../assets/LOGO.svg'
import { List } from "phosphor-react";

export function Header({ clinicaRef, tratamentosRef, draRef, contatoRef }) {

    const goToRef = (ref) => ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
    })

    return (
        <HeaderContainer>
            <img
                src={Logo}
            />

            <ButtonContent>
                <List size={32} weight="bold" color="#fadabb"/> 
            </ButtonContent>

                <HeaderContents>
                    <button
                        className='linkButton'
                    >
                        HOME
                    </button>
                    <button
                        onClick={() => goToRef(tratamentosRef)}
                        className='linkButton'
                    >
                        CHAT ONLINE
                    </button>
                    <button
                        onClick={() => goToRef(tratamentosRef)}
                        className='linkButton'
                    >
                        TRATAMENTOS
                    </button>
                    <button
                        onClick={() => goToRef(clinicaRef)}
                        className='linkButton'
                    >
                        DEPOIMENTOS
                    </button>
                    <button
                        onClick={() => goToRef(draRef)}
                        className='linkButton'
                    >
                        SOBRE A DRA.
                    </button>

                    <Contact href='https://api.whatsapp.com/send?phone=5544999115020&text=Olá!%20Gostaria%20de%20tirar%20uma%20dúvida%20minha%20por%20aqui...' target="_blank">
                        GRUPO VIP
                    </Contact>

                </HeaderContents>

        </HeaderContainer>
    )
}