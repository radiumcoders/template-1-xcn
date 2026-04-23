import Container from "@/components/core/Container"
import {
  FadingScales,
  HorizontalScales,
  VerticalScales,
} from "@/components/core/decorations"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <Container className="bg-grey-500 relative flex h-screen items-center justify-center [--pattern:var(--color-mist-200)] dark:[--pattern:var(--color-mist-900)]">
        <HorizontalScales className="absolute top-0 mx-auto w-screen" />
        <HorizontalScales className="absolute bottom-0 mx-auto w-screen" />
        <VerticalScales className="absolute left-0 mx-auto h-screen" />
        <VerticalScales className="absolute right-0 mx-auto h-screen" />
        <div className="size-full p-10">
          <div className="shadow-2xl relative flex size-full flex-col justify-between">
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
            <nav className="z-10"></nav>
            {/*<HeroDecoration className="absolute inset-x-0 bottom-0 z-0" />*/}
            <h1 className="z-10 font-heading text-6xl font-black">
              This is elon Musk tesla cofounder and ceo
            </h1>
          </div>
        </div>
      </Container>
    </>
  )
}
