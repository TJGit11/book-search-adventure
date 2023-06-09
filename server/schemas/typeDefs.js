const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Books]!
  }

  type Book {
    _id: ID
    bookId: String!
    authors: [String]!
    description: String!
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(description: String!, bookId: String!, title: String!) : User
    deleteBook(bookId: String!) : User
    )
  }
`;

module.exports = typeDefs;
