import React from "react";

interface Props {
  children?: React.ReactNode;
}

const MovieHeadingList = ({ children }: Props) => {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
};

export default MovieHeadingList;
