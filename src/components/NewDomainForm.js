export default function NewDomainForm(){
    return(
      <form action="" className="flex gap-2 my-8">
        <input className="bg-white border border-b-4 border-blue-200 px-4 py-2 text-xl rounded-xl grow" type="text" placeholder="NewDomain.com"/>
        <button className="bg-indigo-500 text-white px-8 rounded-xl border border-b-4 border-indigo-700">Add</button>
      </form>
    );
}