import { DockDemo } from "@/components/Elements/dock";
import Experience from "@/components/Fragment/experience";
import Projects from "@/components/Fragment/project";
import RetroGrid from "@/components/magicui/retro-grid";
import TextRevealByWord from "@/components/magicui/text-reveal";
export default function Home() {
  return (
    <>
      <section className="relative flex  w-screen h-screen flex-col items-center justify-center overflow-hidden bg-background ">
        <span className="mb-3">Portofolios</span>
        <h1 className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-[78px] font-bold leading-none tracking-tighter text-transparent">
          Rifdo Shah Alam
        </h1>
        <DockDemo />
        <RetroGrid />
      </section>
      <Experience />
      <Projects />
      <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg bg-white">
        <TextRevealByWord text="Let's collaborate and innovate together to create extraordinary works." />
      </div>
      <footer className="w-screen container mx-auto">
        <hr />
        <p className="text-center my-3">&copy;Rifdo portofolios - 2024</p>
      </footer>
    </>
  );
}
