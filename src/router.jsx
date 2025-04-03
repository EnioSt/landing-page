import React from "react";
import Header from "./components/header/header";
import Section from "./components/Section/section";
import Apte from "../src/assets/imagens/apte.png"
import Footer from "./components/Footer/footer";
import Form from "./components/Form/form";

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <Section
            id="inicio"
            title="Bem-vindo!"
            text="Descubra mais sobre nossa empresa e os serviços que oferecemos."
            image={Apte}
          />
          <Section
            id="sobre"
            title="Sobre a Empresa"
            text="Somos uma empresa focada em oferecer soluções inovadoras para nossos clientes."
            image={Apte}
          />
          <Form />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
