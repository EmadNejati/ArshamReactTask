import "./App.css";
import Header from "./Components/Molecules/Header";
import Recommend from "./Components/Molecules/Recommend";
import CardsGroup from "./Components/Molecules/CardsGroup";
import SignUpForm from "./Components/Molecules/SignUpForm";
import Footer from "./Components/Molecules/Footer";
import DownloadBtn from "./Components/Molecules/DownloadBtn";
function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Recommend />
      <CardsGroup />
      <SignUpForm />
      <DownloadBtn />
      <Footer />
    </div>
  );
}

export default App;
