'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'


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
              <h1>Socials</h1>
              <div className='flex flex-row gap-5'>
                <FontAwesomeIcon size='4x' icon={faGithub} />
                <FontAwesomeIcon size='4x' icon={faLinkedin} />
                <FontAwesomeIcon size='4x' icon={faInstagram} />
              </div>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}
