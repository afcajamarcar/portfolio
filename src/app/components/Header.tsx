import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Popover, Transition } from '@headlessui/react'
import Button from './Button'

const Header = () => {
  const renderNav = (navClassName: string, olClassName: string): JSX.Element => (
    <nav className={navClassName}>
      <ol className={olClassName}>
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
        {renderNav('flex justify-end', 'flex flex-row space-x-8')}
      </div>
      <div className='block md:hidden'>
        <Popover>
          <Popover.Button>
            <FontAwesomeIcon icon={faBars} />
          </Popover.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute z-10 w-screen h-screen bg-black">
              {renderNav('', '')}
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </header>
  )
}

export default Header
