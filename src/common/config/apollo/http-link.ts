import { HttpLink } from '@apollo/client/link/http';

export function createHttpLink() {
  return new HttpLink({
    uri: 'https://us-central1-paddle-dcde1.cloudfunctions.net/graphql',
  });
}