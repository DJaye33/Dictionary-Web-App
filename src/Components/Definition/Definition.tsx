const Definition = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold md:text-6xl">Keyboard</h2>
          <p className="text-purple-500 text-2xl mt-2 md:text-3xl">
            /ˈkiːbɔːd/
          </p>
        </div>
        <span className="inline-flex w-[48px] h-[48px] md:h-[75px] md:w-[75px] items-center justify-center rounded-full bg-purple-300">
          <span className="text-xl font-medium leading-none text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5  md:w-8 md:h-8 text-purple-500 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </span>
      </div>
    </section>
  );
};

export default Definition;
