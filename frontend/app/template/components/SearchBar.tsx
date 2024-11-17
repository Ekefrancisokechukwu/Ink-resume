import { cn } from "@/lib/utils";
import { toggleSearchBar } from "@/redux/features/headercontrolPanel/headerControlSlice";
import { RootState, useAppDispatch } from "@/redux/store";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const isSearchBarOpen = useSelector(
    (state: RootState) => state.headerPanel.isSearchBarOpen
  );
  const dispatch = useAppDispatch();

  return (
    <div
      className={cn(
        "absolute  flex items-center justify-between shadow-md z-20 -left-32 bg-white rounded-md py-2 px-2 w-[22rem] transition-all",
        isSearchBarOpen
          ? "top-[175%] opacity-100 visible"
          : "top-[0] opacity-0 invisible "
      )}
    >
      <div className="flex items-center gap-x-5">
        <input
          type="text"
          className="px-2 py-1 hover:bg-neutral-100 focus:bg-transparent rounded-lg outline-none w-[11rem] transition-colors duration-300"
          placeholder="here"
        />
        <span className=" text-sm text-neutral-500">0/6</span>
      </div>
      <div className="flex items-center gap-x-1 pl-3 border-l">
        <button className="size-[1.8rem] rounded-full hover:bg-neutral-100 transition-colors duration-300 grid place-items-center">
          <ChevronUp size={15} className="text-neutral-600" />
        </button>
        <button className="size-[1.8rem] rounded-full hover:bg-neutral-100 transition-colors duration-300 grid place-items-center">
          <ChevronDown size={15} className="text-neutral-600" />
        </button>
        <button
          onClick={() => dispatch(toggleSearchBar())}
          className="size-[1.8rem] rounded-full hover:bg-neutral-100 transition-colors duration-300 grid place-items-center"
        >
          <X size={15} className="text-neutral-600" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
