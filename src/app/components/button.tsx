'use client'
import { ButtonProps } from '../types/Button'

const Button = ({ text, href, target = '_self', onClick = () => { }, children }
  : ButtonProps): React.ReactElement => {
  const renderButton = (): React.ReactElement => {
    return (
      <button
        className="bg-black"
        onClick={onClick}
      >
        {text}
      </button>
    )
  }

  const renderAnchor = (): React.ReactElement => {
    return (
      <a
        href={href}
        target={target}
      >
        {children || text}
      </a>
    )
  }

  return href ? renderAnchor() : renderButton()
}

export default Button
