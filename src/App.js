import Address from "./pages/address";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/index";
import Transaction from "./pages/transaction";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/address/*" element={<Address />} />
          <Route path="/transaction/*" element={<Transaction />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
