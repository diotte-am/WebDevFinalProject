import './vendors/bootstrap/bootstrap.min.css'
import './vendors/font-awesome/fontawesome-free-6.1.1-web/css/all.css'
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home"
import Search from "./components/search";
import Login from "./components/login";
import Profile from "./components/profile"
import Detail from "./components/detail";
import CreateOrder from "./components/create-order";
import SearchResultDetail from "./components/search/search-result-detail";
import ShippingDetails from "./components/detail/shipping-details";

function App() {
  return (
    <div className="container">

        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index
                               element={<Home />} />
                        <Route path="home"
                               element={<Home />} />
                        <Route path={"order"}
                               element={<CreateOrder />} />
                        <Route path={"search"}
                               element={<Search />} />
                        <Route path={"login"}
                               element={<Login />} />
                        <Route path={"profile"}
                               element={<Profile />} />
                        <Route path={"detail"}
                               element={<Detail/>} />
                        <Route path={"search/detail"}
                               element={<SearchResultDetail/>} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
