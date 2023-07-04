const Search = () => {
  return (
    <div>
      <label
        htmlFor="search"
        className="block text-sm font-medium leading-6 text-gray-900"
      ></label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="search"
          name="search"
          id="search"
          className="block w-full rounded-md border-0 py-2.5 pr-10 text-gray-900 bg-gray-100 placeholder:text-gray-400 font-extrabold focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm"
          placeholder="Search for any word..."
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-purple-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <p className="mt-2 text-sm text-red-500" id="search-description">
        Whoops, can't be empty…
      </p>
    </div>
  );
};

export default Search;
