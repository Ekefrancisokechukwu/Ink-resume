import { ScrollArea } from "@/components/ui/scroll-area";
import { useClickOutside } from "@/hooks";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

const googleFonts = [
  "Roboto",
  "Open Sans",
  "Lato",
  "Montserrat",
  "Oswald",
  "Raleway",
  "Merriweather",
  "Noto Sans",
  "PT Sans",
  "Source Sans Pro",
  "Poppins",
  "Playfair Display",
  "Ubuntu",
  "Roboto Condensed",
  "Nunito",
  "Cabin",
  "Work Sans",
  "Lora",
  "Inter",
  "Mukta",
];

const FontDropdown = () => {
  const [fonts, setFonts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(isOpen, dropdownRef, () => setIsOpen(false));

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 rounded-lg py-1.5 inline-flex items-center w-[6rem] hover:bg-neutral-100 truncate font-medium text-sm text-neutral-600 transition-all duration-300  justify-between"
      >
        Roboto
        <ChevronDown size={15} />
      </button>
      <div
        className={cn(
          "bg-white absolute origin-top rounded top-[110%] left-0 shadow-[0_5px_8px_rgba(0,0,0,0.1)]",
          isOpen
            ? "transition-all scale-100 opacity-100 visible"
            : "scale-0 opacity-0 invisible"
        )}
      >
        <ScrollArea className="h-[20rem]  w-[14rem] py-2 *:text-sm">
          <div className="border-b">
            <span className="px-4 py-1 text-neutral-300">Current</span>
            <span className="block px-4 py-2 w-full">Popins</span>
          </div>
          <div className="py-1">
            {googleFonts.map((font, i) => {
              return (
                <button
                  key={i}
                  className="block px-4 py-2 w-full text-left hover:bg-neutral-100 transition-all"
                >
                  {font}
                </button>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
export default FontDropdown;
