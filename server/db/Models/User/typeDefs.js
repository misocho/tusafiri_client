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

  type Mutation {
    createUser(firstName: String! lastName: String! username: String! email: String! password: String!) : User!
    updateUser(id: ID! firstName: String lastName: String! username: String!) : User!
  }
`;

module.exports = userTypeDefs;
