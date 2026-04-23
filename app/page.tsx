import Container from "@/components/core/Container"
import {
  FadingScales,
  HeroDecoration,
  HorizontalScales,
  VerticalScales,
} from "@/components/core/decorations"

export default function Page() {
  return (
    <>
      <Container className="relative flex h-screen items-center justify-center [--pattern:var(--color-stone-200)] dark:[--pattern:var(--color-stone-900)]">
        <HorizontalScales className="absolute top-0 mx-auto w-screen" />
        <HorizontalScales className="absolute bottom-0 mx-auto w-screen" />
        <VerticalScales className="absolute left-0 mx-auto h-screen" />
        <VerticalScales className="absolute right-0 mx-auto h-screen" />
        <div className="size-full p-10">
          <div className="relative size-full">
            <FadingScales className="absolute inset-x-0 top-0" />
            <HeroDecoration className="absolute inset-x-0 bottom-0" />
          </div>
        </div>
      </Container>
      {/*<Container className="relative flex h-screen items-center justify-center [--pattern:var(--color-stone-200)]">
        <HorizontalScales className="absolute top-0 mx-auto w-screen" />
        <HorizontalScales className="absolute bottom-0 mx-auto w-screen" />
        <VerticalScales className="absolute left-0 mx-auto h-screen" />
        <VerticalScales className="absolute right-0 mx-auto h-screen" />
        <div className="size-full px-10 relative bg-red-500">

          <FadingScales />
        </div>
      </Container>*/}
    </>
  )
}
