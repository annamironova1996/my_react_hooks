import { useState } from "react";

export const useInput = (initialValue, validator) => {
  /* хук useInput принимает в себя два параметра:
    initialValue - начальное состояние
    validator - валидатор, который ограничит действия пользователя */
  const [value, setValue] = useState(initialValue);
  /*  с помощью встроенного в 'react' хука useState зададим для параметра initialValue два состояния: 
  value - начальное состояние initialValue
  setValue - измененное состояние initialValue */
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    /* зададим переменной event значение value для данного input */

    let willUpdate = true;
    /* переменная willUpdate = true будет означать, что мы пользователю по умолчанию разрешаем писать текст,
    если =false, тогда пользователю запрещено вводить текст */
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    /* на случай, если разработчик задаст валидатор не функцией =) */
    if (willUpdate) {
      setValue(value);
    }
    /*  делаем проверку, если setValue = true, тогда пользователь может вводить в поле input с помощью измененного состояния setValue(value) */
  };
  return { value, onChange };
  /* хук useInput вернет value и изменнное состояние value с помощью функции onChange  */
};
