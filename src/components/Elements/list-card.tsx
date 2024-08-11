const ListCard = () => {
  return (
    <>
      <div className="w-full flex gap-4 border p-4 rounded-[12px]">
        <div className="w-20 h-20 rounded border"></div>
        <div className="leading-loose">
          <h6 className="text-[18px] font-bold">
            Fullstack Engineer - <span>Full time</span>
          </h6>
          <span className="text-[14px]">Varnion Technology</span>
          <br></br>
          <span className="text-[14px] text-[#B4B4B8]">OCT 2023 - Present</span>
        </div>
      </div>
    </>
  );
};
export default ListCard;
