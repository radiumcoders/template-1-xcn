import Container from "@/components/core/Container"
import {
  FadingScales,
  HeroDecoration,
  HorizontalScales,
  VerticalScales,
} from "@/components/core/decorations"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <Container className="relative flex h-screen items-center justify-center [--pattern:var(--color-stone-200)] dark:[--pattern:var(--color-stone-900)]">
        <HorizontalScales className="absolute top-0 mx-auto w-screen" />
        <HorizontalScales className="absolute bottom-0 mx-auto w-screen" />
        <VerticalScales className="absolute left-0 mx-auto h-screen" />
        <VerticalScales className="absolute right-0 mx-auto h-screen" />
        <div className="size-full p-10">
          <div className="shadow-4xl shadow-red-500 border-4 border-red-500 relative flex size-full items-end justify-start z-20">
            <FadingScales className="absolute inset-x-0 top-0 mask-b-from-10%" />
            <Image
              src="/wallpaper-asset.png"
              width={1920}
              height={1080}
              alt=""
              className="absolute bottom-0 z-0 w-full mask-t-from-50% opacity-75 dark:opacity-25  shadow-2xl"
            />
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
