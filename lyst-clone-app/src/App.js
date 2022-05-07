import React from "react";
import MainRoutes from "./Routes/MainRoutes";
import { AppProvider } from "./contextAPI";


function App() {
  return (
    <div>
      <AppProvider>
        <MainRoutes />
      </AppProvider>
    </div>
  );
}

export default App;
