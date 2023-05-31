import React from "react";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const page = async () => {
  await wait(5000);
  console.log("hello");

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  const data = await response.json();

  return <h1>{JSON.stringify(data)}</h1>;
};

export default page;
