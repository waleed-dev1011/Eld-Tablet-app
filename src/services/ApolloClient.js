import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create HTTP links for both endpoints
const localLink = new HttpLink({
  uri: "http://192.168.18.46:4001",
});

const serverLink = new HttpLink({
  uri: "https://backend-dev.tagdev.sa/",
});

// Auth link to add token to headers
const authLink = new ApolloLink(async (operation, forward) => {
  try {
    const token = await AsyncStorage.getItem("auth-token");
    // console.log("Token is", token);

    operation.setContext({
      headers: {
        Authorization: token ? `Bearer${token}` : "",
      },
    });
  } catch (error) {
    console.error("Error in authLink:", error);
  }
  return forward(operation);
});

const splitLink = ApolloLink.split(
  (operation) => operation.getContext().clientName === "server",

  authLink.concat(serverLink),

  authLink.concat(localLink)
);

// Apollo Client setup
export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
