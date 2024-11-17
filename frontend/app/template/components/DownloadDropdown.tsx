import { useClickOutside } from "@/hooks";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DownloadDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(isOpen, dropdownRef, () => setIsOpen(false));

  return (
    <div ref={dropdownRef} className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size={"icon"}
        variant={"ghost"}
      >
        <Download />
      </Button>
      <div
        className={cn(
          "bg-white absolute origin-top-right w-[15rem] rounded z-20 py-1 top-[110%] right-0 shadow-[0_5px_8px_rgba(0,0,0,0.1)]",
          isOpen
            ? "transition-all scale-100 opacity-100 visible"
            : "scale-0 opacity-0 invisible"
        )}
      >
        <button className="py-2 px-3 w-full  text-start hover:bg-neutral-50 duration-300 text-sm text-neutral-600 ">
          PDF Document
        </button>
        <button className="py-2 px-3 w-full text-start hover:bg-neutral-50 duration-300 text-sm text-neutral-600 ">
          Plain txt
        </button>
        <button className="py-2 px-3 w-full text-start hover:bg-neutral-50 duration-300 text-sm text-neutral-600 ">
          Web page (Html zipped)
        </button>
      </div>
    </div>
  );
};
export default DownloadDropdown;
