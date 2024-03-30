import React from 'react'
import Button from './Button'

const Header = () => (
  <header className='sticky top-0 z-50 p-5 bg-slate-900'>
    <nav className='flex justify-end'>
      <ol className='flex flex-row space-x-8'>
        <li>
          <Button text='Experience' href='#experience'/>
        </li>
        <li>
        <Button text='CV' href='#cv' />
        </li>
        <li>
          <Button text='Projects' href='#projects' />
        </li>
        <li>
        <Button text='Contact' href='#contact' />
        </li>
      </ol>
    </nav>
  </header>
)

export default Header
