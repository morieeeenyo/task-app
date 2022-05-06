import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import CognitoAuthProvider from "./cognito/CognitoAuthProvider";
import awsconfig from "./aws-exports";


const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <CognitoAuthProvider amplifyConfig={awsconfig}>
      <App />
    </CognitoAuthProvider>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
