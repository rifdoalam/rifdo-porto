import Image from "next/image";

interface ListCardProps {
  data: any; // Replace 'any' with the actual type of your data
}
const ListCard = (props: ListCardProps) => {
  const { data } = props;
  return (
    <>
      <div className="w-full flex gap-4 border p-4 rounded-[12px]">
        <div className="w-20 h-20 rounded border overflow-hidden flex justify-center items-center ">
          <Image src={`/${data?.image}`} className="object-cover" width={100} height={100} alt="" />
        </div>
        <div className="">
          <div>
            <h6 className="text-[18px] font-bold">
              {data?.position} - <span>{data?.type}</span>
            </h6>
            <span className="text-[14px]">{data?.company}</span>
          </div>
          <span className="text-[14px] text-[#B4B4B8]">{data?.duration}</span>
        </div>
      </div>
    </>
  );
};
export default ListCard;
