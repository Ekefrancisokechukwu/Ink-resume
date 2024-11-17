"use client";

import { creepster } from "@/components/fonts";
import Link from "next/link";
import TemplateName from "./TemplateName";
import {
  CircleMinus,
  CirclePlus,
  Search,
  Download,
  Link2Icon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeaderControlPanel from "./HeaderControlPanel";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/redux/store";
import { toggleCollapsed } from "@/redux/features/headercontrolPanel/headerControlSlice";
import FileDropdown from "./FileDropdown";
import DownloadDropdown from "./DownloadDropdown";

const HeaderPanel = () => {
  const collapse = useSelector(
    (state: RootState) => state.headerPanel.isCollapsed
  );
  const dispatch = useAppDispatch();

  return (
    <header
      className={cn(
        "shadow-md px-6 transition-all duration-300 py-3 w-full bg-white sticky top-0 z-50"
      )}
    >
      <div
        className={cn(
          "flex items-start justify-between transition-all duration-300",
          collapse ? "-translate-y-10 -my-8 invisible " : "my-0 visible"
        )}
      >
        <div className="flex items-start gap-x-2">
          <Link
            href={"/"}
            className={`${creepster.className} text-xl font-semibold px-3 border-r`}
          >
            INK
          </Link>
          <div className="">
            <TemplateName />
            <div className="mt-2 flex items-center gap-x-2">
              <FileDropdown />
              <button className="text-neutral-400 text-sm px-2 rounded-md transition-colors duration-300 py-1 hover:bg-neutral-100">
                View
              </button>
              <button className="text-neutral-400 text-sm px-2 rounded-md transition-colors duration-300 py-1 hover:bg-neutral-100">
                Help
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-7">
            <div className="flex items-center gap-x-3">
              <DownloadDropdown />
              <Button size={"icon"} variant={"ghost"}>
                <Link2Icon />
              </Button>
            </div>
            <button className="size-[2.3rem] hover:ring-neutral-400/50 rounded-full hover:ring-2 outline-2 bg-gray-100"></button>
          </div>
        </div>
      </div>

      <HeaderControlPanel
        collapse={collapse}
        toggleCollapse={() => dispatch(toggleCollapsed())}
      />
    </header>
  );
};

export default HeaderPanel;
