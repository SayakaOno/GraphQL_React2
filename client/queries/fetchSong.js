import gql from 'graphql-tag';

export default gql`
  SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;
