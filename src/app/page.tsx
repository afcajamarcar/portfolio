'use client'
import Header from './components/Header'

export default function Home() {
  return (
    <>
      <Header/>
      <main className="flex h-screen">
        <section className='flex justify-center'>
          <h1>Andres Cajamarca</h1>
          <h2>Senior Software Engineer</h2>
        </section>
      </main>
    </>
  )
}
