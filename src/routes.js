import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GoogleFontsLoader from "google-fonts-loader";
import GlobalStyles from "./globalStyles";

const App = () => {
  GoogleFontsLoader.load({
    Poppins: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  });
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
