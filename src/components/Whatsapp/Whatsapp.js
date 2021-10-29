import { IoLogoWhatsapp } from "react-icons/io";
import useSound from "use-sound";

import React from 'react'
import { WhatsappContainer, WhatsappIcon } from "./WhatsappElement";
import whatsapp from "./sounds/whatsapp.mp3";

const Whatsapp = () => {
    const [play] = useSound(whatsapp, {volume : 0.002});

    return (
        <WhatsappContainer onClick={play} onMouseEnter={play} href="https://wa.me/+919922991836">
            <WhatsappIcon />
        </WhatsappContainer>
    )
}

export default Whatsapp
