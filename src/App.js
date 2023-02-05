import { useSelector } from "react-redux";
import "./App.css";
import ActiveEmail from "./components/emailCard/activeEmail/ActiveEmail";
import EmailListing from "./pages/emailListing/EmailListing";

function App() {
  const { isEmailActive } = useSelector((state) => state.activeEmail);
  return (
    <div className="App">
      <EmailListing />
      {isEmailActive && <ActiveEmail />}
    </div>
  );
}

export default App;
