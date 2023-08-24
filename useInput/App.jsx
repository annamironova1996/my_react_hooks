import { useInput } from "./useInput";

import "./styles.css";

export default function App() {
  const maxLen = (value) => value.length <= 10;
  /*  функция maxLen ограничит ввод в макимум 10 символов */
  const checkAt = (value) => !value.includes("@", 10);
  /*  функция checkAt проверит на валидность повтора @ после 10 символа */
  const name = useInput("Mr", maxLen);
  /* переменная name вызовет наш хук useInput с двумя агрументами : 
    "Mr" - значение, которое будет выводиться на экран в поле <input>,
   maxLen - функция, которая будет срабатывать для валидации */
  const email = useInput("@mail.ru", checkAt);
  /* переменная email вызовет наш хук useInput с двумя агрументами : 
    "@mail.ru" - значение, которое будет выводиться на экран в поле <input>,
   checkAt - функция, которая будет срабатывать для валидации */
  return (
    <div className="App">
      <h1>Для регистрации заполните данные:</h1>
      <input
        placeholder="Имя"
        {...name}
        /*  с помощью spreat оператора разберем name на составляющие */
      />
      <input
        placeholder="Email"
        {...email}
        /*  с помощью spreat оператора разберем email на составляющие */
      />
    </div>
  );
}
