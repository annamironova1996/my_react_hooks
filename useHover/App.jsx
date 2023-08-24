import { useHover } from "./useClick";

export default function App() {
  const sayHello = () => console.log("Привет");
  /*   создаем функцию, которая будет аргументом для нашего хука useHover */
  const title = useHover(sayHello);
  /* создаем переменную, которую мы будет связывать с тегом, и через нее будем рабоать с хуком useHover */

  return (
    <div className="App">
      <h1 ref={title}>Привет</h1>
      {/* связываем тег с переменной title  */}
    </div>
  );
}
