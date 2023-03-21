import { WhatsappLogo } from "phosphor-react";
import { WhatsappContent } from "./styles";


export function Whatsapp() {

    return(
        <WhatsappContent>
            <a href='https://api.whatsapp.com/send?phone=5544999115020&text=Olá!%20Gostaria%20de%20tirar%20uma%20dúvida%20minha%20por%20aqui...' target="_blank">
            <WhatsappLogo size={55} color='white' />
            </a>
        </WhatsappContent>
    )
}