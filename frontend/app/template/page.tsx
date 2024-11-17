import Template from "./CV/Template";
import HeaderPanel from "./components/HeaderPanel";
import SidePanel from "./components/SidePanel";

const page = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeaderPanel />
      <div className="grid grid-cols-[auto_1fr]  ">
        <SidePanel />
        <div className=" px-[2rem] grid place-items-center  py-[3rem]  w-full h-full  overflow-x-auto overflow-y-hidden">
          <Template />
        </div>
      </div>
    </div>
  );
};
export default page;
