type ContentDividerProps = {
  partOfSpeech: string;
};

const ContentDivder = ({ partOfSpeech }: ContentDividerProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start">
        <span className="bg-white pr-3 leading-6 text-2xl text-gray-900 font-bold italic">
          {partOfSpeech}
        </span>
      </div>
    </div>
  );
};

export default ContentDivder;
