import { ScrollArea } from "@/components/ui/scroll-area";
import { useClickOutside } from "@/hooks";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Mail, MoveRight } from "lucide-react";

const FileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(isOpen, dropdownRef, () => setIsOpen(false));

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-neutral-400 text-sm px-2 rounded-md transition-colors duration-300 py-1 hover:bg-neutral-100"
      >
        File
      </button>
      <div
        className={cn(
          "bg-white absolute origin-top rounded z-20 top-[110%] left-0 shadow-[0_5px_8px_rgba(0,0,0,0.1)]",
          isOpen
            ? "transition-all scale-100 opacity-100 visible"
            : "scale-0 opacity-0 invisible"
        )}
      >
        <ScrollArea className="h-[20rem]  w-[14rem] py-2 *:text-sm">
          <div>
            <button className="flex items-center w-full gap-x-3 px-3  hover:bg-neutral-50 py-3 ">
              <Mail size={17} /> Email{" "}
              <span className="ms-auto">
                <MoveRight size={17} />
              </span>
            </button>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
export default FileDropdown;
