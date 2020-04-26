import React from 'react';
import {useSelector} from 'react-redux'

import GlobalStyle from './styles/global';
import Nui from './util/Nui';


export default function App() {
  const { show } = useSelector(state => state);

  return (
    <>
      <GlobalStyle show={show}/>
    </>
  );
}

/// #if DEBUG

setTimeout(() => {
  Nui.emulate("SHOW_UI");
}, 5000)

/// #endif
