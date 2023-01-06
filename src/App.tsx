import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const Detail = React.lazy(() => import("./pages/Detail"));

function App() {
  return (
    <Suspense fallback={false}>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="*"
          element={<div className="px-10 py-6">Page Not Found</div>}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
