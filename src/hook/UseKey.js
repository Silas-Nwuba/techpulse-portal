const UseKey = () => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Escape") e.preventDefault();
  };
  return { handleKeyDown };
};
export default UseKey;
