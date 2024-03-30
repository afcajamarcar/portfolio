'use client'
import { ButtonProps } from '../types/Button'

const Button = ({ text, href, onClick = () => {} }
: ButtonProps ): React.ReactElement => {
    console.log('onClick is', onClick)
    const renderButton = (): React.ReactElement => {
        return (
            <button className="bg-black" onClick={onClick}>{text}</button>
        )
    }

    const renderAnchor = (): React.ReactElement => {
        return (
            <a href={href} target='_blank'>{text}</a>
        )
    }
    
    return href ? renderAnchor() : renderButton()
}

export default Button
