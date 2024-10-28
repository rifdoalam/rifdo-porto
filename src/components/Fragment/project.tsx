"use client";
import { useState } from "react";
import Card from "../Elements/card";
import { MagicCard } from "../magicui/magic-card";
import ShinyButton from "../magicui/shiny-button";
import { projects } from "@/utils/data";
const Projects = () => {
  const [paginate, setPaginate] = useState(8);
  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * A function that is called when the "Load More" button is clicked.
   * The purpose of this function is to load more projects when the button is clicked.
   * The function currently only logs a message to the console, but in the future
   * it should be updated to make an API request to load more data.
   */
  /******  1750ce49-eefd-4b60-9fae-54c973396968  *******/

  return (
    <>
      <section className="w-screen container mx-auto py-24">
        <h1 className="mb-14 text-center pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-[58px] font-bold leading-none tracking-tighter text-transparent">
          Projects
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-3">
          {projects.map((project, index) => {
            if (index <= paginate - 1) {
              return <Card data={project} key={index} />;
            }
            return null; // Return null for items that don't match the condition
          })}
        </div>
        <div className="w-full flex justify-center mt-14">
          {paginate >= projects.length && <ShinyButton onClick={() => setPaginate(8)} text="Show Less" icon="" />}
          {paginate < projects.length && <ShinyButton onClick={() => setPaginate(paginate + 4)} text="Show More" icon="" />}
        </div>
      </section>
    </>
  );
};
export default Projects;
