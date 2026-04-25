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
        <Container className="flex h-full flex-col items-center justify-end pb-10 border-x border-border px-2 gap-4">
          <h1 className="text-center text-5xl sm:text-6xl md:text-7xl">
            Get Better Reports <br /> With OpenClaw
          </h1>
          <div>
            <Button>Get Started</Button>
            <Button>View Pricing</Button>
          </div>
        </Container>
      </section>
      <section className="h-fit w-full border-b border-border">
        <Container className="border-x border-border">
          <Image
            src={"/asset.jpg"}
            quality={1000}
            className="rounded-none"
            alt="hero-image"
            height={1080}
            width={1920}
          />
        </Container>
      </section>
    </main>
  )
}
