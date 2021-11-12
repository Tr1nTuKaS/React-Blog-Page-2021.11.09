import { Route, Switch } from "react-router";
import "./App.css";
import BlogPage from "./pages/blog/PagesBlog";
import AboutPage from "./pages/about/PagesAbout";
import ContactPage from "./pages/contact/PagesContact";
import HomePage from "./pages/home/PagesHome";
import Header from "./component/header/Header";
import SingleBlogPage from "./pages/single-blog/SingleBlogPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/blog/:blogId">
          <SingleBlogPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <h2>Opps page not found 404 </h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
