import Image from "next/image";
import { useMoralis } from "react-moralis";

function Main() {
  const { logout } = useMoralis();
  return (
    <div>
      <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-4">
       <h1>COMING SOON...</h1>

        <button
          className="bg-black text-white rounded-lg p-5 font-bold animate-pulse"
          onClick={() => logout()}
        >
          Logout to UNIVERSE
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://shorturl.at/jwNR4"
          layout="fill"
          objectFit="cover" 
        />
      </div>
    </div>
  );
}

export default Main;
