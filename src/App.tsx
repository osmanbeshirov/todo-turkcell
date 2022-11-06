import Content from "./Components/Content";
import ContentFooter from "./Components/ContentFooter";
import { TodoContextProvider } from "./Components/Context/TodoContext";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <TodoContextProvider>
        <section className="todoapp">
          <Header />
          <Content />
        </section>

        <Footer />

      </TodoContextProvider>


    </>

  );
}

export default App;
