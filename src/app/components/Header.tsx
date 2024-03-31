import React from 'react'
import Button from './Button'

const Header = () => {
  const renderNav = () => (
    <nav className='flex justify-end'>
      <ol className='flex flex-row space-x-8'>
        <li>
          <Button text='Experience' href='#experience' />
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
  )
  return (
    <header className='sticky top-0 z-50 p-5 bg-slate-900'>
      <div className='hidden md:block'>
        {renderNav()}
      </div>
      <div className='block md:hidden'>
        <h1>Hamburguer menu here</h1>
      </div>
    </header>
  )
}

export default Header
