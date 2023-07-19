import { MouseEventHandler } from 'react'

const Button = ({ text, href }
: {text: string, href?: string}): React.ReactElement => {
    const handleOnClick = (): MouseEventHandler<HTMLButtonElement> | undefined => {
        // TODO handle actions based on params
        return
    }

    const renderButton = (): React.ReactElement => {
        return (
            <button className="bg-black" onClick={handleOnClick()}>{text}</button>
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
