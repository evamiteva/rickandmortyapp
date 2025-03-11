import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client"; // Import ApolloProvider
import client from "./apolloClient"; // Import Apollo Client
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
