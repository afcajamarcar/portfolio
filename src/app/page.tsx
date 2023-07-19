import Button from './components/button'

export default function Home() {
  return (
    <main className="flex h-screen">
      <section>
        <h1>Hello world!</h1>
        <Button text="My button"></Button>
        <Button text="My Anchor" href="https://google.com"></Button>
      </section>
    </main>
  )
}
