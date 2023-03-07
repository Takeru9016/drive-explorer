import { MdKeyboardArrowDown } from "react-icons/md";

export default function Folder() {
  return (
    <>
      <div className="flex items-start flex-col ml-5 mt-5">
        <div>
          <div className="relative flex mt-5 items-center rounded h-14 w-[1500px] border-b-4 border-white pr-6 text-xl font-extralight">
            <div className="flex items-center self-stretch gap-[24px] p-4 w-[300px]">
              <div className="w-fit whitespace-nowrap leading-4 font-medium text-2xl">
                Name
              </div>
            </div>

            <div className="flex items-center self-stretch gap-4 py-5 pb-4 w-[300px]">
              <div className="w-fit whitespace-nowrap leading-4 font-medium text-2xl">
                Shared with
              </div>
              <MdKeyboardArrowDown className="h-7 w-7" />
            </div>
            <div className="flex items-center self-stretch gap-4 py-5 pb-4 w-[300px]">
              <div className="w-fit whitespace-nowrap leading-4 font-medium text-2xl">
                Created At
              </div>
              <MdKeyboardArrowDown className="h-7 w-7" />
            </div>
            <div className="flex items-center self-stretch gap-4 py-5 pb-4 w-[300px]">
              <div className="w-fit whitespace-nowrap leading-4 font-medium text-2xl">
                Folder Size
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
