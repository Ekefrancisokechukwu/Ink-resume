"use client";

import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Colors from "./Colors";
import Spacing from "./Spacing";

const SidePanel = () => {
  const { headerPanel, customization } = useSelector(
    (state: RootState) => state
  );

  return (
    <aside
      className={cn(
        "w-[15rem] sticky  transition-all py-5 px-4 duration-300   bg-white  ",
        headerPanel.isCollapsed
          ? "top-[54.5px]  h-[calc(100vh_-_54.5px)]"
          : "top-[114.5px] h-[calc(100vh_-_114.5px)] ",
        customization.isSidebarCollapse ? " -ml-[40rem]" : "mr-0"
      )}
    >
      <div className="py-4 border-b">
        <Colors />
      </div>
      <div className="py-4 border-b">
        <Spacing />
      </div>
    </aside>
  );
};
export default SidePanel;
