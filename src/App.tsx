import { Suspense, useEffect } from "react";
import AppRoute from "@/app/AppRoute";
import { useLoadingBar } from "react-top-loading-bar";
import { useSelector } from "react-redux";
import { RootState } from "./stores/store";

const Loading = () => {
  const { start, complete } = useLoadingBar()
  useEffect(() => {
    start();
    return () => {
      complete();
    }
  }, [])
  return <h1>Loading...</h1>
}

function App() {
  const app = useSelector((state: RootState) => state.app);
  const { start, complete } = useLoadingBar({
    color: "#447bba",
    height: 0.5,
  });

  useEffect(() => {
    if (app.pageLoading) {
      start();
    }
    return () => {
      if (!app.pageLoading) {
        complete();
      }
    }
  }, [app.pageLoading])

  return (
    <>
      <Suspense fallback={<Loading />}>
        <AppRoute />
      </Suspense>
    </>
  );
}
export default App;
