import Search from "../Search/Search";

const AppMain = () => {
  return (
    <main className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <section className="px-4 py-5 sm:px-6">
        <Search />
      </section>
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      <div className="px-4 py-4 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </main>
  );
};

export default AppMain;
