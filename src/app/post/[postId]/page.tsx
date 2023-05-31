import React from "react";

type PageProps = {
  params: {
    postId: string;
  };
};

const page = ({ params }: PageProps) => {
  // console.log(props);
  // { params: { postId: '1' }, searchParams: {} }

  return <div>{params.postId}</div>;
};

export default page;
