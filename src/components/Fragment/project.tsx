import Card from "../Elements/card";
import { MagicCard } from "../magicui/magic-card";
import ShinyButton from "../magicui/shiny-button";
const Projects = () => {
  return (
    <>
      <section className="w-screen container mx-auto py-24">
        <h1 className="mb-14 text-center pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-[58px] font-bold leading-none tracking-tighter text-transparent">
          Projects
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 mb-14">
          <button className="bg-gradient px-4 text-white rounded">All</button>
          <button>Website</button>
          <button>Mobile</button>
          <button>Product Development</button>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-full flex justify-center mt-14">
          <ShinyButton text="View More" icon="" />
        </div>
      </section>
    </>
  );
};
export default Projects;
