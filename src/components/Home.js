import Landing from "../subcomponents/Landing";
import Faq from "./Faq";
import Steps from "./Steps";
import Testimonials from "./Testimonials";
import Why from "./Why";

const Home = () => {
  return (
    <div>
      <Landing />
      <Why />
      <Steps />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
