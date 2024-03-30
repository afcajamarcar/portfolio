'use client'
import Button from './components/Button'

export default function Home() {
  const sayHello = () => {
    console.log("Button Clicked")
  }
  return (
    <main className="flex h-screen">
      <section>
        <h1>Hello world!</h1>
        <Button text="My button" onClick={() => sayHello()}></Button>
        <Button text="My Anchor" href="https://google.com"></Button>
      </section>
    </main>
  )
}
