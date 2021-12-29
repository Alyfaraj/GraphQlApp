import React, { useEffect } from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const AppContainer = () => {
  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: "https://api.graphql.jobs/",
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
