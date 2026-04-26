import Container from "@/components/core/Container"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="h-full min-h-svh w-full">
      <nav className="h-fit w-full border-b border-border">
        <Container className="hidden h-16 items-center justify-between border-x border-border px-10 font-heading text-lg md:flex">
          <div>
            <h1 className="text-2xl">Clowdrey</h1>
          </div>
          <div className="flex h-full w-fit items-center justify-center gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <Button className={"font-barlow"} size={"lg"}>
              Get Started Now
            </Button>
          </div>
        </Container>
      </nav>
      <section className="h-96 w-full border-b border-border">
        <Container className="relative flex h-full flex-col items-center justify-end gap-4 border-x border-border px-2 [--pattern:var(--color-mist-100)] dark:[--pattern:var(--color-mist-900)]">
          <div className="absolute h-full w-full bg-[repeating-linear-gradient(90deg,var(--pattern)_0,var(--pattern)_1px,transparent_100%,transparent_50%)] bg-size-[40px_40px] mask-b-from-0"></div>
          <div className="z-10 flex flex-col gap-4 bg-transparent py-10">
            <h1 className="text-center text-5xl tracking-tighter sm:text-6xl md:text-7xl">
              Get Better Reports <br /> With OpenClaw
            </h1>
            <div className="flex items-center justify-center gap-2">
              <Button size={"lg"}>Get Started</Button>
              <Button size={"lg"} variant={"outline"}>
                View Pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <section className="flex h-136 w-full items-center justify-center border-b border-border">
        <div className="h-full w-full max-w-4xl mx-auto border-x border-border [--pattern:var(--color-mist-100)] dark:[--pattern:var(--color-mist-900)]">
          {/* <div className="flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px]">
            <span className="border border-border bg-background/50 p-2 uppercase backdrop-blur-2xl">
              image here
            </span>
          </div> */}
          
        </div>
      </section>
    </main>
  )
}
