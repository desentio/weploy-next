import Image from "next/image";
import WeploySelect from "./weploy-select";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white text-black">
        <WeploySelect />
        <div>Malgré la pluie qui tombait sans cesse sur la petite ville pittoresque, les habitants continuaient à sourire et à vaquer à leurs occupations quotidiennes, montrant ainsi leur résilience et leur joie de vivre qui étaient véritablement contagieuses</div>
    </main>
  );
}
