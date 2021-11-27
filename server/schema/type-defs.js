const {gql} = require('apollo-server');

const typeDefs = gql`
    type User{
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality:Nationality!
        friends:[User!]
        mouvie:[Movie!]
    }
    type Movie{
        id:ID!
        name:String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }
   type Query {
        users:[User!]!
        user(id:ID):User!
        mouvies:[Movie!]!
        mouvie(name:String!):Movie!
    }
    input createUserInput{
        name:String!
        username:String!
        age:Int!
        nationality:Nationality!
    }
    type Mutation{
        createUser(input:createUserInput):User!
        
    }

    enum Nationality{
        CANADA
        BRAZIL
        CHILE
        GERMANY
        TUNISIA
        INDIA
    }

`



module.exports ={typeDefs}