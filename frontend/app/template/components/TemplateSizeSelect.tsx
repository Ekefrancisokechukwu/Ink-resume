import { useClickOutside } from "@/hooks";
import { cn } from "@/lib/utils";
import { setSize } from "@/redux/features/customize/customizeSlice";
import { RootState, useAppDispatch } from "@/redux/store";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

const sizes = [50, 70, 80, 90, 100, 110, 120];

const TemplateSizeSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(isOpen, dropdownRef, () => setIsOpen(false));
  const [templateSize, setTemplateSize] = useState<string>("");
  const size = useSelector(
    (state: RootState) => state.customization.customize.size
  );
  const dispatch = useAppDispatch();

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "px-2 rounded-lg capitalize py-1.5 inline-flex items-center w-[4.5rem] hover:bg-neutral-100 truncate font-medium text-sm text-neutral-600 transition-all duration-300  justify-between",
          isOpen ? "bg-neutral-100" : "bg-transparent"
        )}
      >
        {size === 100 ? "Fit" : `${size}%`}
        <ChevronDown size={15} />
      </button>{" "}
      <div
        className={cn(
          "bg-white absolute origin-top rounded top-[110%] left-0 shadow-[0_5px_8px_rgba(0,0,0,0.1)]",
          isOpen
            ? "transition-all scale-100 opacity-100 visible"
            : "scale-0 opacity-0 invisible"
        )}
      >
        <ScrollArea className="h-[20.4rem] w-full">
          <button
            onClick={() => {
              dispatch(setSize(100));

              setIsOpen(false);
            }}
            className="block px-4 py-2 border-b w-full text-left hover:bg-neutral-100 transition-all text-neutral-500"
          >
            Fit
          </button>
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => {
                // setTemplateSize(size);
                dispatch(setSize(size));
                setIsOpen(false);
              }}
              className="block px-4 py-2 w-full text-left hover:bg-neutral-100 transition-all text-neutral-500"
            >
              {size}%
            </button>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};
export default TemplateSizeSelect;
