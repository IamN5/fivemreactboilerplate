import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function WindowListener({ children }) {
  const dispatch = useDispatch();

  function handleEvent(event) {
    const { type, data } = event.data;

    console.log('Listened to:', type);

    if (type) dispatch({ type, data });
  };

  useEffect(() => {
    window.addEventListener("message", handleEvent);

    return () => window.removeEventListener("message", handleEvent);
  }, [])

  return React.Children.only(children)
}
