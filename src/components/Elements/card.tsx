import ShinyButton from "../magicui/shiny-button";

const Card = () => {
  return (
    <>
      <div className="w-full border p-3 rounded-[20px]">
        <div className="mb-4">
          <h6 className="font-bold mb-2">Website testing</h6>
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-full flex flex-wrap my-2 gap-2">
          <span className="px-3 bg-[#F5F7F8] text-[12px] font-bold rounded">React</span>
        </div>
        <div className="mb-3 flex gap-2">
          <ShinyButton text="" icon="website" />
          <ShinyButton text="" icon="github" />
        </div>
        <div className="w-full h-[20vh] bg-slate-400 mb-3 rounded"></div>
      </div>
    </>
  );
};
export default Card;
