import Container from "@/components/core/Container"
import {
  FadingScales,
  HorizontalScales,
  VerticalScales,
} from "@/components/core/decorations"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <Container className="bg-grey-500 relative flex h-screen items-center justify-center [--pattern:var(--color-mist-200)] dark:[--pattern:var(--color-mist-900)]">
        <HorizontalScales className="absolute top-0 mx-auto w-screen" />
        <HorizontalScales className="absolute bottom-0 mx-auto w-screen" />
        <VerticalScales className="absolute left-0 mx-auto h-screen" />
        <VerticalScales className="absolute right-0 mx-auto h-screen" />
        <div className="size-full p-10">
          <div className="relative flex size-full flex-col justify-between shadow-2xl">
            <FadingScales className="absolute inset-x-0 top-0 mask-b-from-10%" />
            <Image
              src="/wallpaper-asset.png"
              width={1920}
              height={1080}
              alt=""
              className="absolute inset-x-0 bottom-0 z-0 w-full mask-t-from-50% mask-b-from-50% opacity-60 shadow-2xl dark:hidden"
            />
            <Image
              src="/wallpaper-dark.png"
              width={1920}
              height={1080}
              alt=""
              className="absolute inset-x-0 bottom-0 z-0 hidden w-full mask-t-from-50% mask-b-from-50% opacity-60 shadow-2xl dark:block"
            />
            <nav className="z-10 flex items-center justify-between px-5 pt-5">
              <h1 className="bg-linear-to-b from-blue-500 to-blue-700 bg-clip-text text-transparent text-shadow-blue-500/10 text-shadow-lg">
                Clawder
              </h1>
              <div className="flex items-center justify-center gap-4">
                <Link href={"/"}>Pricing</Link>
                <Link href={"/"}>Features</Link>
              </div>
              <Button
                className={
                  "rounded shadow-[inset_0px_0px_10px_1px_#1e40af] hover:bg-blue-700/90 dark:shadow-[inset_0px_0px_10px_1px_#1d4ed8]"
                }
              >
                Get Started
              </Button>
            </nav>
            <div className="z-99 flex flex-1 flex-col items-start justify-end gap-4 p-4 pb-10">
              {/*<HeroDecoration className="absolute inset-x-0 bottom-0 z-0" />*/}
              <h1 className="z-10 w-4xl bg-linear-to-b from-blue-900 to-blue-950 bg-clip-text font-heading text-6xl font-black tracking-tight text-balance text-transparent dark:from-blue-200 dark:to-blue-300">
                Set up Your OpenClaw instance in a Less then a minute.
              </h1>
              <p className="text-balance font-xl capitalize dark:text-neutral-100/60 text-neutral-900/60">
                the easiest way to run OpenClaw 24/7. Always on, accessible
                anywhere, with persistent memory and access to all major LLMs.
              </p>
              <div className="flex gap-4">
                <Button
                  size={"lg"}
                  className={
                    "rounded border-blue-800 shadow-[inset_0px_0px_10px_1px_#1e40af] hover:bg-blue-700/90 dark:shadow-[inset_0px_0px_10px_1px_#1d4ed8]"
                  }
                >
                  Get Started
                </Button>
                <Button
                  size={"lg"}
                  className={
                    "rounded border-blue-800 shadow-[inset_0px_0px_10px_1px_#1e40af] hover:bg-blue-700/90 dark:shadow-[inset_0px_0px_10px_1px_#1d4ed8]"
                  }
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
