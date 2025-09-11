import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Blog from "../Page/Blog/Blog";
import Contact from "../Page/Contact/Contact";
import Home from "../Page/Home/Home";
import Recipe from "../Page/Recipe/Recipe";
import ThemeProvider from "../shared/context/ThemContex";
import styles from "./App.module.css";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider>
        <HashRouter>
          <div className={styles.container}>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes/*" element={<Recipe />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </ThemeProvider>
    </>
  );
}

export default App;


