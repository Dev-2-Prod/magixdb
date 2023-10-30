import { useEffect, useMemo, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MagixDBFinalDesign from "./pages/MagixDBFinalDesign";
import LoginModuleDesktop from "./pages/LoginModuleDesktop";
import MagixDBTablet from "./pages/MagixDBTablet";
import MagixdbSignInTabletScreen from "./pages/MagixdbSignInTabletScreen";
import MagixDBMobile from "./pages/MagixDBMobile";
import LogInWithMagixdb from "./pages/LogInWithMagixdb";

function useMediaQuery(query) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);


  return match;
}

function useMediaQueries() {
  const sd = useMediaQuery("(mid-width: 576px");
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 992px)");

  return { sd, md, lg };
}
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const { sd, md, lg } = useMediaQueries();

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>


      <Route path="/" element={
        lg ? <MagixDBFinalDesign /> : md ? <MagixDBTablet /> : <MagixDBMobile />
      } />
      <Route
        path="/login"
        element={
          lg ? <LoginModuleDesktop /> : md ? <MagixdbSignInTabletScreen /> : <LogInWithMagixdb />
        }
      />
    </Routes>
  );
}
export default App;
