import React from "react";

const ParameterRenderer = props => {
  console.log(props);
  let lastName = props.lastName;
  const { name } = props.match.params;
  return <h1>{`You passed in ${name} ${lastName} as a parameter!`}</h1>;
};

export default ParameterRenderer;
