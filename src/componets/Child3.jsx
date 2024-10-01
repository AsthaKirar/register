

const Child3 = (props) => {
  console.log(props)
  return (
    <div className="text-2xl">
      <h1>{props.title}</h1>
      <br />
      {props.children}
    </div>
  );
};

export default Child3