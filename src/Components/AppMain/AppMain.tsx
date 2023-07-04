import Search from "../Search/Search";
import Definition from "../Definition/Definition";
import ContentDivder from "../ContentDivider/ContentDivder";

const AppMain = () => {
  return (
    <main className="overflow-hidden bg-white">
      <section className="py-5">
        <Search />
      </section>
      <div className="md:py-1">
        <Definition />
      </div>
      <div className="md:py-4">
        <ContentDivder partOfSpeech="noun" />
        <ContentDivder partOfSpeech="verb" />
      </div>
    </main>
  );
};

export default AppMain;
