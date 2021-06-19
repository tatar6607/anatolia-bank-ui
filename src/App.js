import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import About from "./about/About";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
