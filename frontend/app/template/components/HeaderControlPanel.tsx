import {
  ChevronUp,
  CircleMinus,
  CirclePlus,
  Search,
  SquareChevronLeft,
  SquareChevronRight,
} from "lucide-react";
import FontDropdown from "./FontDropdown";
import { cn } from "@/lib/utils";
import TemplateSizeSelect from "./TemplateSizeSelect";
import { RootState, useAppDispatch } from "@/redux/store";
import {
  setSize,
  toggleSidebar,
} from "@/redux/features/customize/customizeSlice";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import { toggleSearchBar } from "@/redux/features/headercontrolPanel/headerControlSlice";

interface IHeaderControlPanel {
  toggleCollapse: () => void;
  collapse: boolean;
}

const HeaderControlPanel = ({
  toggleCollapse,
  collapse,
}: IHeaderControlPanel) => {
  const customization = useSelector((state: RootState) => state.customization);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-end justify-between mt-1">
      <div className="flex items-center  gap-x-4">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="size-[2rem] grid place-items-center hover:bg-gray-100 rounded-lg transition-all duration-500"
        >
          {customization.isSidebarCollapse ? (
            <SquareChevronRight size={15} />
          ) : (
            <SquareChevronLeft size={15} />
          )}
        </button>
        <FontDropdown />
      </div>

      <div className="flex items-center gap-x-2 ">
        <div className="relative">
          <button
            onClick={() => dispatch(toggleSearchBar())}
            className=" size-[2rem] grid place-items-center hover:bg-gray-100 rounded-lg transition-all duration-500"
          >
            <Search size={13} />
          </button>
          <SearchBar />
        </div>
        <span className="w-[1px] inline-block h-[2rem] bg-neutral-300" />
        <button
          disabled={customization.customize.size <= 50}
          onClick={() => {
            dispatch(setSize(customization.customize.size - 10));
          }}
          className="size-[2rem] disabled:opacity-50  grid place-items-center hover:bg-gray-100 rounded-lg transition-all duration-500"
        >
          <CircleMinus size={13} />
        </button>
        <button
          disabled={customization.customize.size >= 120}
          onClick={() => {
            dispatch(setSize(customization.customize.size + 10));
          }}
          className="size-[2rem] disabled:opacity-50 active:scale-105 grid place-items-center hover:bg-gray-100 rounded-lg transition-all duration-500"
        >
          <CirclePlus size={13} />
        </button>
        <TemplateSizeSelect />

        <button
          onClick={toggleCollapse}
          className="size-[2rem] grid place-items-center hover:bg-gray-200 bg-gray-100 rounded-lg transition-all duration-500"
        >
          <ChevronUp
            size={13}
            className={cn(
              "transition-transform duration-150",
              collapse ? "rotate-180" : "rotate-0"
            )}
          />
        </button>
      </div>
    </div>
  );
};

export default HeaderControlPanel;
