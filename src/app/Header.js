import './globals.css'
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import LogoutLink from "@/components/LogoutLink";
import {getServerSession} from "next-auth";

export default async function Header() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <header className="my-4 flex items-center justify-between">
      <a href="/" className="text-3xl font-bold bg-gradient-to-r to-blue-600 from-indigo-900 text-transparent bg-clip-text">
        RankTracker
      </a>
      <div className="flex items-center justify-center gap-4 bg-slate-300 p-1 rounded-full w-40 h-15">
        <div className="pr-4 leading-5">
          <h3 className="font-bold">{user?.name}</h3>
          <LogoutLink />
        </div>
      </div>
    </header>
  );
}