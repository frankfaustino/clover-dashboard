import { makeExecutableSchema } from 'graphql-tools'

import { adminTypeDefs, assignAdmin, createAdmin, isLoggedIn } from './Auth/'
import { spaceTypeDefs, spaces } from './Space/'
import { ticketTypeDefs, tickets } from './Ticket/'
import { topicTypeDefs } from './Topic/'
import { userTypeDefs } from './User/'

const typeDefs = [adminTypeDefs, spaceTypeDefs, ticketTypeDefs, topicTypeDefs, userTypeDefs]

const resolvers = {
  Query: {
    isLoggedIn,
    tickets,
    spaces
  },
  Mutation: {
    assignAdmin,
    createAdmin
  }
}

export default makeExecutableSchema({ resolvers, typeDefs })
