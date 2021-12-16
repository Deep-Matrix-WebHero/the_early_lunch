import "./App.css";
import Restaurant from "./Components/Restaurant/Restaurant";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import MealDetail from "./Components/MealDetail/MealDetail";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/restaurant">
          <Restaurant></Restaurant>
        </Route>
        <Route path={`/meal/:idMeal`}>
          <MealDetail></MealDetail>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
