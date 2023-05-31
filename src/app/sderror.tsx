"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const error = ({ error, reset }: ErrorProps) => {
  return (
    <div>
      <p>error</p>
      <br />
      <button onClick={reset}>Try again!</button>
    </div>
  );
};

export default error;
