import { useState } from 'react';
import StyledButton from './button.style';
import Image from 'next/image';

type ButtonProps = {
    text: String,
}

const Button = ({ 
    text,
}: ButtonProps) => {
    const [clicked, setClicked] = useState(false);

    return <StyledButton className={clicked ? 'button--clicked' : ''} onClick={() => setClicked(!clicked)} >
        <span className="button__text">{ text }</span>
        <Image className="button__background" src="/image/wormhole.gif" alt="Button Background" layout="fill" objectFit="cover" />
    </StyledButton>
};

export default Button;