import Image from "next/image";

export default function Home() {
  return (
    <div>
      <form action="" className="flex gap-2">
        <input className="bg-white border border-b-4 border-blue-200 px-4 py-2 text-l rounded-xl grow" type="text" placeholder="NewDomain.com"/>
        <button className="bg-indigo-500 text-white px-8 rounded-xl">Add</button>
      </form>
    </div>
  );
}
