import { BadgeProps } from '../types/Badge'

const Badge = ({ type = 'primary', text }: BadgeProps) => {
  if (type === 'primary') {
    return (
      <span className='rounded-full bg-lime-600 p-1'>
        {text}
      </span>
    )
  }
}

export default Badge
