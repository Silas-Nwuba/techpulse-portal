const FilterButton = ({ option, onclick, active }) => {
  return (
    <button
      disabled={active}
      className={`${
        active
          ? " border-[#007bff] border-2 bg-[#007bff] text-white rounded-md font-semibold text-sm cursor-pointer py-2 px-4 disabled:cursor-default"
          : "border-[#007bff] border-2 py-2 px-4 font-semibold text-sm rounded-md text-stone-600 cursor-pointer  hover:bg-[#007bff] transition duration-300 ease-in-out hover:text-white"
      }`}
      onClick={onclick}
    >
      {option.value.charAt(0).toUpperCase() + option.value.slice(1)}
    </button>
  );
};

export default FilterButton;
