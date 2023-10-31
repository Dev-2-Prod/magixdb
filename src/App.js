import { useEffect, useMemo, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MagixDBFinalDesign from "./pages/Laptop/MagixDBFinalDesign";
import LoginModuleDesktop from "./pages/Laptop/LoginModuleDesktop";
import MagixDBTablet from "./pages/Tablet/MagixDBTablet";
import MagixdbSignInTabletScreen from "./pages/Tablet/MagixdbSignInTabletScreen";
import MagixDBMobile from "./pages/Mobile/MagixDBMobile";
import LogInWithMagixdb from "./pages/Mobile/LogInWithMagixdb";
import SignupMobile from "./pages/Mobile/SignUpMobile";
import ForgotPasswordMobile from "./pages/Mobile/ForgotPasswordMobile";
import SetMyPasswordAndLoginDesk from "./pages/Mobile/SetMyPasswordAndLoginDesk";
import SignupDesktop from "./pages/Laptop/SignUpDesktop";
import ForgotPasswordDesktop from "./pages/Laptop/ForgotPasswordDekstop";
import SignupTablet768px from "./pages/Tablet/SignUpTbalet";
import ForgotPasswordTablet768 from "./pages/Tablet/ForgotPasswordTablet";
import SetMyPasswordAndLoginTabl from "./pages/Tablet/SetMyPasswordAndLoginDesk";
import SetMyPasswordAndHelpDesk from "./pages/Laptop/SetMyPasswordAndHelpDesk";

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
      <Route
        path="/signup"
        element={
          lg ? <SignupDesktop /> : md ? <SignupTablet768px /> : <SignupMobile />
        }
      />
      <Route
        path="/forgotpassword"
        element={
          lg ? <ForgotPasswordDesktop /> : md ? <ForgotPasswordTablet768/> : <ForgotPasswordMobile />
        }
      />
      <Route
        path="/newpassword"
        element={
          lg ? <SetMyPasswordAndHelpDesk /> : md ? <SetMyPasswordAndLoginTabl/> : <SetMyPasswordAndLoginDesk />
        }
      />



    </Routes>
  );
}
export default App;
