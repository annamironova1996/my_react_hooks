import { usePreventLeave } from "./usePreventLeave";

export default function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  /* распаковываем две функции от хука usePreventLeave */
  return (
    <div className="App">
      <button onClick={enablePrevent}>Защитить</button>
      {/* кнопка, которая будет защищать пользователя и передаем ей при клике enablePrevent */}
      <button onClick={disablePrevent}>Не защищать</button>
      {/* кнопка, которая будет отменять защиту пользователя и передаем ей при клике disablePrevent */}
    </div>
  );
}
