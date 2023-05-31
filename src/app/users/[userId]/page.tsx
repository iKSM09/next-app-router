import { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import UserPosts from "../components/UserPosts";
import getAllUsers from "@/lib/getAllUsers";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPost";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(params.userId);
  const user: User = await userData;

  console.log("user", user);

  if (!user) {
    return {
      title: "User not found.",
    };
  }

  return {
    title: user.name,
    description: `Posts by - ${user.name}`,
  };
}

const UserPage = async ({ params }: Params) => {
  const userData: Promise<User> = getUser(params.userId);
  const userPostsData: Promise<Post[]> = getUserPosts(params.userId);

  // const [user, userPosts] = await Promise.all([userData, userPostsData]);

  const user = await userData;

  if (!user) notFound();

  return (
    <>
      <h2 className="text-xl font-black text-blue-300">{user.name}</h2>
      <br />
      <Suspense fallback={<h3>Loading...</h3>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
};

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}

export default UserPage;
