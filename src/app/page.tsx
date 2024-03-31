'use client'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header/>
      <main className="block h-screen m-10">
        <section className='flex flex-col text-center'>
          <h1>Andres Cajamarca</h1>
          <h2>Senior Software Engineer</h2>
        </section>
        <section className='grid grid-cols-2 p-5'>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
          <p>CARD</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
