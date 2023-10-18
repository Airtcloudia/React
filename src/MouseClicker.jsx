const MouseClicker = () => {
  const handleButtonClick = (event) => {
    console.log(event.currentTarget.name);
  };
  return (
    <button name="one" onClick={handleButtonClick}>
      {" "}
      <img width={24} height={24} />
      Click me
    </button>
  );
};

export default MouseClicker;
