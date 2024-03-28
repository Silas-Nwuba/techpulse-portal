const UseKey = () => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };
  return { handleKeyDown };
};

export default UseKey;
