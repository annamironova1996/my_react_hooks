import { useState, useEffect } from "react";

export const useTitle = (initialTitle) => {
  /* хук useTitle будет принимать 1 параметр - начальное состояние нащего title */
  const [title, setTitle] = useState(initialTitle);
  /* с помощью встроенного хука useEffect зададим два состояния :
    1 - начальное состояние title, в котором будет наш параметр initialTitle,
    2 - измененное состояние входящего параметра initialTitle */

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  /* создаем функцию, в которой мы будем искать элемент по тегу 'title' и менять его значение  */

  useEffect(updateTitle, [title]);
  /* с помощью хука useEffect будем вызывать функцию updateTitle и вызывать будем только тогда, когда будет меняться значение title */
  return setTitle;
  /* сам хук возвращает измененное состояние входящего параметра  в хук useTitle */
};
