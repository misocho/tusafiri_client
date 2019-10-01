import gql from 'graphql-tag';

const UserQuery = gql`
  query {
    users {
      id
      name
      email
      messages {
        message
        senderMail
        receiverMail
      }
    }
  }
`;

const CreateUserMutation = gql`
  mutation($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      nameemail
      id
      messages {
        message
        senderMail
        receiverMail
      }
    }
  }
`;

module.exports = {UserQuery, CreateUserMutation};
