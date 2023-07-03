import { AppBar } from "./Components";

import "./App.css";

function App() {
  return (
    <>
      <div className="mx-auto max-w-7xl min-w-min px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto max-w-3xl">
          <AppBar />
        </div>
      </div>
    </>
  );
}

export default App;
