import { Suspense } from "react";
import AppRoute from "@/app/AppRoute";
function App() {
  return (
    <>
      <Suspense fallback={"loading"}>
        <AppRoute />
      </Suspense>
    </>
  );
}
export default App;
