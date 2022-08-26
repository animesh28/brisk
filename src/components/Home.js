import Landing from "../subcomponents/Landing";
import Faq from "./Faq";
import Steps from "./Steps";
import Why from "./Why";

const Home = () => {
  return (
    <div>
      <Landing />
      <Why />
      <Steps />
      <Faq />
    </div>
  );
};

export default Home;
