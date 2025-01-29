// import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// const gsmClient = new ApolloClient({
//   link: new HttpLink({
//     uri: "https://backend-dev.tagdev.sa/graphql", // URL for GSM server
//   }),
//   cache: new InMemoryCache(),
// });

// export default gsmClient;

// import {
//     ApolloClient,
//     InMemoryCache,
//     HttpLink,
//     ApolloLink,
//   } from "@apollo/client";
//   import AsyncStorage from "@react-native-async-storage/async-storage";

//   // Auth link to add token to headers
//   const authLink = new ApolloLink(async (operation, forward) => {
//     try {
//       const token = await AsyncStorage.getItem("auth-token");
//       console.log("Token is", token);

//       operation.setContext({
//         headers: {
//           Authorization: token ? `Bearer${token}` : "",
//         },
//       });
//     } catch (error) {
//       console.error("Error in authLink:", error);
//     }
//     return forward(operation);
//   });

//   // Apollo Client setup
//   export const client = new ApolloClient({
//     link: ApolloLink.from([
//       authLink,
//       new HttpLink({ uri: "http://192.168.18.79:4001" }), // Your server URI
//     ]),
//     cache: new InMemoryCache(),
//   });
