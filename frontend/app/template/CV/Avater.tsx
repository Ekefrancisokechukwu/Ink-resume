import avater from "@/public/avater.avif";
import Image from "next/image";

const Avater = () => {
  return (
    <div className="flex items-center gap-x-4">
      <div>
        <Image
          alt="Avater"
          src={avater}
          layout="intrinsic"
          width={50}
          height={50}
          className="rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold">Dries Vincent</h1>
        <p className="text-2xl font-medium text-neutral-500">
          Frontend Developer
        </p>
      </div>
    </div>
  );
};
export default Avater;
