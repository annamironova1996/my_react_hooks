import { useTitle } from "./useTitle";

export default function App() {
  const titleUpdater = useTitle("Загрузка...");
  /* создаем переменную, которая будет вызывать хук useTitle со входящим параметром ('Загрузка...') */
  setTimeout(() => titleUpdater("главная страницв"), 5000);
  /* создаем функцию которая через 5секунд после загрузки будет менять titleUpdater  */
  return (
    <div className="App">
      <h1>Привет</h1>
    </div>
  );
}
