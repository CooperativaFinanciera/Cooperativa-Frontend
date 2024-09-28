import { Button } from "@nextui-org/react";
import { HiOutlineIdentification } from "react-icons/hi";

export const Footer = () => {
  return (
    <div className="px-5 mt-10">
      <footer className="bg-[#f7f8fa] rounded-2xl p-4">
        <div className="bg-primary text-white rounded-2xl p-4 grid grid-cols-2 items-center">
          <h3 className="text-xl font-semibold">
            ¿Quieres conocer si perteneces al grupo de accionistas de la
            Cooperativa?
          </h3>
          <div className="bg-black rounded-full p-4 w-full flex items-center gap-3">
            <HiOutlineIdentification className="text-white" size={25} />
            <input className="grow outline-none bg-transparent" />
            <Button radius="full" className="text-black">
                Consultar
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};
