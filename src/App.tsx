import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import FormSign from "./components/form-sign/FormSign";
import ThankYou from "./components/thankyou/ThankYou";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<FormSign />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
