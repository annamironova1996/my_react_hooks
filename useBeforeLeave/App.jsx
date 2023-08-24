import { useBeforeLeave } from "./useBeforeLeave";

export default function App() {
  const pleaseStop = () => console.log("Пожалуйста, остановитесь");
  /* создаем функцию, которая будет выводить сообщение при уведении мышки с сайта */
  useBeforeLeave(pleaseStop);
  return (
    <div className="App">
      <h1>Привет</h1>
    </div>
  );
}
