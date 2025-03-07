'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  Card,
  Footer,
  Header,
} from './components'


export default function Home() {
  return (
    <>
      <Header />
      <main className="block h-screen m-10">
        <section className='flex flex-col text-center'>
          <h1>Andres Cajamarca</h1>
          <h2>Senior Software Engineer</h2>
          <p className='pt-10 pb-10'>
            Hey, Im a software engineer with more than X years of experience...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque purus urna, mattis bibendum enim congue vel.
            Donec semper nulla sed odio porttitor ullamcorper.
            Vivamus varius dapibus nisi, non condimentum elit semper vel. Proin non enim ultrices, rutrum sem quis, hendrerit erat.
          </p>
        </section>
        <section className='grid grid-cols-2 p-5 gap-8'>
          <section className='flex flex-col space-y-4'>
            <h1>
              Experience
            </h1>
            <Card
              title='Frontend Developer'
              subtitle='“Mercado Libre” (e-commerce)'
              upperNote='MM/YY - Present'
              note='Bogotá, Colombia'
              items={[
                'first item',
                'second item',
              ]}
              badges={[
                { text: 'React' },
                { text: 'Java' },
              ]}
            />
          </section>
          <section className='flex flex-col space-y-8'>
            <section className='flex flex-col space-y-4'>
              <h1>Pojects</h1>
              <p>Space to insert projects cards...</p>
            </section>
            <section className='flex flex-col space-y-4'>
              <h1>Interests</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas pellentesque purus urna, mattis bibendum enim congue vel.
              </p>
            </section>
            <section className='flex flex-col space-y-4'>
              <h1>Contact</h1>
              <div className='flex flex-row gap-5'>
                <Button
                  href='https://github.com/afcajamarcar'
                  target='_blank'
                >
                  <FontAwesomeIcon size='4x' icon={faGithub} />
                </Button>
                <Button
                  href='https://www.linkedin.com/in/afcajamarca'
                  target='_blank'
                >
                  <FontAwesomeIcon size='4x' icon={faLinkedin} />
                </Button>
                <Button
                  href='https://www.instagram.com/afnothing_'
                >
                  <FontAwesomeIcon size='4x' icon={faInstagram} />
                </Button>
                <Button
                  href='tel:+14388557397'
                >
                  <FontAwesomeIcon size='4x' icon={faPhoneAlt} />
                </Button>
                <Button
                  href='mailto:afnothing5@gmail.com'
                >
                  <FontAwesomeIcon size='4x' icon={faEnvelope} />
                </Button>
              </div>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}
