import CustomSelect from "../CustomSelect/CustomSelect";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const AppBar = () => {
  return (
    <div className="flex justify-between items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="w-8 h-9 stroke-slate-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>

      {/* Right AppBar Group */}
      <div className="flex justify-between items-center">
        <CustomSelect />
        {/* Simple Divider */}
        <div className="w-[1px] bg-slate-400"></div>
        <ThemeToggler />
      </div>
    </div>
  );
};

export default AppBar;
