import ListCard from "../Elements/list-card";

const Experience = () => {
  return (
    <>
      <section className="w-screen container mx-auto py-24">
        <h1 className="mb-14 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-[58px] font-bold leading-none tracking-tighter text-transparent">
          Experience&apos;'s
        </h1>
        <div className="w-full flex flex-col md:flex-row  gap-7">
          <div className="w-full md:w-5/12 p-4">
            <p className="leading-loose">
              I am <strong>Rifdo Shah Alam</strong>, a software engineer with experience in software development and technology solutions. I have
              expertise in programming, system analysis, product development, project management, and am committed to creating efficient and
              innovative applications and systems. I am excited to continue learning and taking on new challenges in the technology industry.
            </p>
          </div>
          <div className="w-full md:w-7/12">
            <ListCard />
          </div>
        </div>
      </section>
    </>
  );
};
export default Experience;
