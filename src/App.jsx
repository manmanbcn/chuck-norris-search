import React from 'react'
import './App.css'
import MainFeature from './components/mainFeature.jsx'
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <MainFeature />
      </Provider>
    </>
  )
}

export default App
