import { HeaderContainer, HeaderContents, Contact, Instagram, ButtonContent } from "./styles";
import Logo from '../../assets/LOGO.svg'
import { List } from "phosphor-react";

export function Header({ chatRef, tratamentosRef, depoimentosRef, draRef }) {

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
                <List size={32} weight="bold" color="#fadabb" />
            </ButtonContent>

            <HeaderContents>
                <button
                    className='linkButton'
                >
                    HOME
                </button>
                <button
                    onClick={() => goToRef(chatRef)}
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
                    onClick={() => goToRef(depoimentosRef)}
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

                <Contact>
                    GRUPO VIP
                </Contact>

            </HeaderContents>

        </HeaderContainer>
    )
}