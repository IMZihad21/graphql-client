import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeLayout from "./Layouts/ThemeLayout";

const client = new ApolloClient({
  // uri: "https://djangogql.vercel.app",
  uri: "http://127.0.0.1:8000",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeLayout>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </ThemeLayout>
    </BrowserRouter>
  </React.StrictMode>
);
