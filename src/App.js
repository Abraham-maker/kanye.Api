import { useEffect, useState } from "react";
import "./App.css";
import kanye from "./kanye.jpg";

/*
  // Pasos A seguir

    1. Inicia tu componente en modo “cargando”.

    2. Luego de que tu componente haya renderizado, haz la petición de datos.

    3. Cuando la petición de datos haya finalizado, guarda los datos y desactiva el modo “cargando”.

    4.Asegúrate que cuando tu componente esté en modo cargando muestre un indicador de cargando (un spinner o un texto), y cuando no, que muestre los datos que recibió.
*/

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.kanye.rest") //1 ⬅️ Lamamos al Api, El resultado es una promesa
      .then((response) => response.json()) //2 ⬅️ cuando la funcion finalice, transformamos la respuesta a JSON (response.json() Tambien es una promesa)
      .then((data) => {
        setQuote(data.quote); // ⬅️ Guardar datos
        setIsLoading(false); // ⬅️ Desactivar modo "cargando"
      }); //3 ⬅️ Aqui ya tenemos la respuesta en formato objeto
  }, []);

  //Añadimos la funcion al boton para al darle click cambie la frase
  const random = () => {
    fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setIsLoading(false);
      });
  };

  // ⬅️ Comprobamos si hay data o no. Si no hay se ejecuta en pantalla lo siguiente
  if (isLoading) {
    return (
      <div className="container">
        <h1 className="text-center mt-5 text-white">Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="">
      <nav className="navbar navbar-light ">
        <div className="container-fluid">
          <span className="navbar-text text-white h4">Kanye West</span>
        </div>
      </nav>
      <div className="row row-cols-1 row-cols-md-2 g-1 contenedor">
        <div className="col">
          <div className="card border-0">
            <img src={kanye} className="card-img-top" alt="..." />

            <div className="card-body">
              <p className="card-text">
                {quote} <span>*</span>
              </p>
            </div>
          </div>

          <div className="d-grid gap-2 col-6 mx-auto mt-5">
            <button onClick={random} className="btn Random" type="button">
              Random
            </button>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <p className="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by{" "}
                <a href="https://github.com/Abraham-maker" target="_blank">
                  Abraham-maker
                </a>
              </p>
            </div>

            <div className="col-md-6 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="https://www.facebook.com/abraham.moreno.7777019" target="_blank">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="https://twitter.com/JholfrenM" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="github" href="https://github.com/Abraham-maker" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="https://www.linkedin.com/in/abraham-moreno-145b6a1b6/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
