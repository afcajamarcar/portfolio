'use client'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'

export default function Home() {
  return (
    <>
      <Header/>
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
        <section className='grid grid-cols-2 p-5'>
          <Card
            title='Frontend Developer'
            subtitle='“Mercado Libre” (e-commerce)'
            upperNote='MM/YY - Present'
            note='Bogotá, Colombia'
            items={[
              'first item',
              'second item',
            ]}
          />
        </section>
      </main>
      <Footer />
    </>
  )
}
