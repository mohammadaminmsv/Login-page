import React from "react";
import Show from "./Show";
import StyleList from "./StyleList";

const Actor = ({ list, del }) => {
  return (
    <>
      <StyleList>
        <div>
          <div className="flex flex-row mb-3 max-xl:flex-col max-xl:items-center">
            <div className="w-[102pt] max-xl:w-[250pt]   dark:text-slate-200  font-bold text-black border-black   border-[1px] dark:border-slate-100">
              Co.number
            </div>
            <div className="w-[100pt] max-xl:w-[250pt]    dark:text-slate-200  font-bold text-black border-black   border-[1px] dark:border-slate-100">
              name
            </div>
            <div className="w-[100pt] max-xl:w-[250pt]    dark:text-slate-200  font-bold text-black border-black   border-[1px] dark:border-slate-100">
              lastname
            </div>
            <div className="w-[260pt] max-xl:w-[250pt]   dark:text-slate-200  font-bold text-black border-black   border-[1px] dark:border-slate-100">
              email2
            </div>
            <div className="w-[149pt] max-xl:w-[250pt]   dark:text-slate-200  font-bold text-black border-black   border-[1px] dark:border-slate-100">
              phone number
            </div>
            <div className="w-[98pt]  max-xl:w-[250pt]   dark:text-slate-200  font-bold text-black border-black   border-[1px] dark:border-slate-100 ">
              sexual
            </div>
            <div className="w-[120pt] max-xl:w-[250pt]   dark:text-slate-200  font-bold text-black border-black   border-[1px] dark:border-slate-100">
              role
            </div>
          </div>

          <ul className="flex flex-col ">
            {list.map((item, index) => (
              <Show del={del} data={item} key={index} />
            ))}
          </ul>
        </div>
      </StyleList>
    </>
  );
};

export default Actor;
