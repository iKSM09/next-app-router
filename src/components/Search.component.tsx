"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center w-50 md:justify-between"
    >
      <input
        type="search"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="w-64 p-2 bg-white rounded-xl"
      />
      <button
        type="submit"
        className="p-2 ml-2 font-bold rounded-xl bg-slate-300"
      >
        🔍
      </button>
    </form>
  );
};

export default Search;
