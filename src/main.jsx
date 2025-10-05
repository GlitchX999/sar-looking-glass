import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// TensorFlow.js backend configuration
import * as tf from '@tensorflow/tfjs'

// Set TensorFlow backend
tf.setBackend('cpu').then(() => {
  console.log('TensorFlow.js backend initialized:', tf.getBackend())
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
