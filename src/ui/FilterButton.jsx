const FilterButton = ({ option, onclick, active }) => {
  return (
    <button
      disabled={active}
      className={`${
        active
          ? " border-[#4299E1] border-2 dark:border-[#4299E1]  dark:bg-[#4299E1] bg-[#4299E1]  dark:hover:bg-[#4299E1]   dark:hover:text-white text-white rounded-md font-medium text-sm cursor-pointer py-2 px-4 disabled:cursor-default"
          : "border-[#4299E1] dark:border-[#4A5568]  dark:hover:border-[#4299E1] border-2 py-2 px-4 font-medium text-sm   dark:text-[#CBD5E0] dark:hover:bg-[#4299E1] dark:hover:text-white rounded-md text-stone-600 cursor-pointer  hover:bg-[#4299E1] transition duration-300 ease-in-out hover:text-white"
      }`}
      onClick={onclick}
    >
      {option.value.charAt(0).toUpperCase() + option.value.slice(1)}
    </button>
  );
};

export default FilterButton;
