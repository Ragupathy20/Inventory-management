import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ProductList } from "./pages/ProductList";
import { ProductDetail } from "./pages/ProductDetail";
import { Error } from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { AboutUs } from "./pages/AboutUs";
import { AccordionList } from "./pages/AccordionList";
import { Upload } from "./pages/Upload";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/accordion" element={<AccordionList />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/inventory">
            <Route index element={<ProductList />} />
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
