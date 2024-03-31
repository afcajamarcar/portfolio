import { CardProps } from '../types/Card'

const Card = ({ title, subtitle, upperNote }: CardProps) => {
  return (
    <section className='rounded-md bg-slate-50'>
      <div className='grid grid-cols-2'>
        <h1>{title}</h1>
        {upperNote && (<h2>{upperNote}</h2>)}
      </div>
      {subtitle && (<h3>subtitle</h3>)}
    </section>
  )
}

export default Card
