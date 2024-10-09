const FilterButton = ({ option, onclick, active }) => {
  return (
    <button
      disabled={active}
      className={`${
        active
          ? "hover:bg-[#5660d9] border-[#6571ff] border-1 dark:border-[#6571ff]  dark:bg-[#6571ff] bg-[#6571ff]  dark:hover:bg-[#6571ff]   dark:hover:text-white text-white rounded-md font-medium text-[12px] cursor-pointer py-2 px-4 disabled:cursor-default"
          : "border-[#6571ff] dark:border-[#6571ff]  dark:hover:border-[#6571ff] border-[1.5px] py-2 px-4 font-medium text-[12px]   dark:text-[#CBD5E0] dark:hover:bg-[#4299E1] dark:hover:text-white rounded-md text-stone-600 cursor-pointer  hover:bg-[#4299E1] transition duration-300 ease-in-out hover:text-white"
      }`}
      onClick={onclick}
    >
      {option.value.charAt(0).toUpperCase() + option.value.slice(1)}
    </button>
  );
};

export default FilterButton;
