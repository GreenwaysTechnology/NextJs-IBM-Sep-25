import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone'


//define schema -SDL
const typeDefs = `
  #Query
  type Query {
     users:[User]
  }
  type User {
     id:ID!
     name:String
     status:Boolean
  }

`
//biz logic: resolvers
const resolvers = {
    Query: {
        //implement hello api 
        users() {
            return [{
                id: 1,
                name: 'Subramanian',
                status: true
            },
            {
                id: 1,
                name: 'Subramanian',
                status: true
            }

            ]
        }
    }
}

//we need to deploy the schema and bind with resolver
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})

//web server start
const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
})
console.log(`Apollo Server is Ready ${url}`)