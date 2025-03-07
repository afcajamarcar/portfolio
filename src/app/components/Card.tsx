import { CardProps } from '../types/Card'
import Badge from './Badge'

const Card = ({ title, subtitle, upperNote, note, items, badges }: CardProps) => {
  return (
    <section className='rounded-md bg-slate-800 p-5 shadow-md'>
      <div className='grid grid-cols-2'>
        <h1>{title}</h1>
        {upperNote && (
          <h2 className='text-end'>
            {upperNote}
          </h2>
        )}
      </div>
      {subtitle && (<h3>{subtitle}</h3>)}
      {note && (<h4>{note}</h4>)}
      <ol className='pt-5'>
        {(items && items.length) && (
          items.map((item, index) => (
            <li key={`${item}_${index}`}>
              {item}
            </li>
          ))
        )}
      </ol>
      {badges && (
        <div className='pt-5 flex flex-row space-x-4'>
          {badges.map((badge, index) =>
            <Badge
              key={index}
              text={badge.text}
            />
          )}
        </div>
      )}
    </section>
  )
}

export default Card
