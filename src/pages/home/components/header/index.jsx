import { HeaderContainer, HeaderContents, Contact, Instagram, ButtonContent, BarContent, Bar } from "./styles";
import Logo from '../../../../assets/LOGO.svg'
import { CaretDown, List, X } from "phosphor-react";
import { useState } from "react";

export function Header({ chatRef, tratamentosRef, depoimentosRef, draRef, grupoRef }) {

    const [openBar, SetOpenBar] = useState(false)

    const handleOpenBar = () => SetOpenBar(!openBar)

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

            <ButtonContent onClick={handleOpenBar}>
                {openBar ?
                    <Bar>
                        <BarContent>
                            <X size={32} weight="bold" color="#4c2d2d" />
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

                            <Contact onClick={() => goToRef(grupoRef)}>
                                GRUPO VIP
                            </Contact>
                        </BarContent>
                    </Bar>
                    : <List size={32} weight="bold" color="#fadabb" />
                }

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

                <Contact onClick={() => goToRef(grupoRef)}>
                    GRUPO VIP
                </Contact>

            </HeaderContents>

        </HeaderContainer>
    )
}