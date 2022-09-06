import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accomodations from "./pages/AccomodationAndFacilities/Accomodation";
import BookYourRoom from "./pages/book-your-room/Book-your-room";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import RulesAndRegulations from "./pages/rules-and-regulations/Rules-and-regulations";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="accomodations" element={<Accomodations />} />
          <Route path="book-your-room" element={<BookYourRoom />} />
          <Route
            path="rules-and-regulations"
            element={<RulesAndRegulations />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
