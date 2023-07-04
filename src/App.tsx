import { AppBar, AppMain } from "./Components";

import "./App.css";

function App() {
  return (
    <>
      <div className="mx-auto max-w-7xl min-w-[375px] p-4 sm:p-6 lg:p-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto max-w-3xl">
          <AppBar />
          <AppMain />
        </div>
      </div>
    </>
  );
}

export default App;
