import React from "react";

interface Props {
  a: number;
  b: number;
}

const SumComponent: React.FC<Props> = ({ a, b }) => {
  return <div>Sum: {a + b}</div>;
};

export default SumComponent;
