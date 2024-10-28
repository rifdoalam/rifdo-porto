"use client";
import { useState } from "react";
import ShinyButton from "../magicui/shiny-button";

interface ListCardProps {
  data: {
    name: string;
    description: string;
    technologies: string[];
    url?: string;
    github?: string;
  };
}
const Card = (props: ListCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data } = props;
  return (
    <>
      <div className="w-full border p-3 rounded-[20px] mb-2">
        <div className="mb-4">
          <h6 className="font-bold mb-2">{data?.name}</h6>
          <div>
            <p className={`line-clamp ${isExpanded ? "line-clamp-none" : `line-clamp-2`} text-[12px]`}>{data?.description}</p>
            <button className="text-[12px] text-blue-500" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-3">
          {data.technologies.map((technology, index) =>
            index <= 2 ? (
              <span key={index} className="px-3 bg-[#F5F7F8] text-[12px] font-bold rounded line-clamp-1">
                {technology}
              </span>
            ) : null
          )}
          {data.technologies.length > 4 && (
            <span className="px-3 bg-[#F5F7F8] text-center text-[12px] font-bold rounded ">+{data.technologies.length - 3}</span>
          )}
        </div>
        <div className="mb-3 flex gap-2">
          {data?.url && (
            <a href={data?.url} target="__blank">
              <ShinyButton onClick={() => {}} text="" icon="website" />
            </a>
          )}
          {data?.github && <ShinyButton onClick={() => {}} text="" icon="github" />}
        </div>
        <div className="w-full h-[20vh] bg-slate-400 mb-3 rounded"></div>
      </div>
    </>
  );
};
export default Card;
