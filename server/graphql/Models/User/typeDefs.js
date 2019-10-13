const userTypeDefs = `
  type Query {
    users: [User]
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
  }

  type AuthPayload {
    user: User
    token: String
  }

  type Mutation {
    createUser(firstName: String! lastName: String! username: String! email: String! password: String!) : User!
    updateUser(id: ID! firstName: String lastName: String! username: String!) : User!
    loginUser(username: String email: String password: String!) : AuthPayload
  }
`;

module.exports = userTypeDefs;
