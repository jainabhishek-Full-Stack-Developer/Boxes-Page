const Box = (props) => {
  const boxClass = `box ${props.design}`;
  return (
    <div className={boxClass}>
      <p className="boxheading">{props.text}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="boxConatiner">
      <Box text="Small" design="yellow" />
      <Box text="Medium" design="primary" />
      <Box text="Large" design="pink" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
