import Header from "../components/Header/Header";
import About from "../Page/About/About";
import Blog from "../Page/Blog/Blog";
import Contact from "../Page/Contact/Contact";
import Home from "../Page/Home/Home";
import Recipe from "../Page/Recipe/Recipe";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className={styles.container}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Recipe />} />
              <Route path="/" element={<Blog />} />
              <Route path="/" element={<Contact />} />
              <Route path="/" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
