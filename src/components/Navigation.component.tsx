import Link from "next/link";
import Search from "./Search.component";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-slate-900">
      <div className="text-lg font-bold">My Next App</div>
      <div className="flex items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/users">Users</Link>
        <Link href="/about">About us</Link>
        <Search />
      </div>
    </nav>
  );
};

export default Navigation;
