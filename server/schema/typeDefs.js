const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    jobs: [Job]
  }
  type Job {
    _id: ID
    title: String
    company: String
    location: String
    pay: String
    date: String

  }
  

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addJob(profileId: ID!, job: String): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
