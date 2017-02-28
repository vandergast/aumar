const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} = require('graphql')
const ContestStatusType = require('./contest-status')

const ContestType = new GraphQLObjectType({
  name: 'ContestType',
  fields: {
    id: {type: GraphQLID},
    code: {type: new GraphQLNonNull(GraphQLString)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    description: {type: GraphQLString},
    status: {type: new GraphQLNonNull(ContestStatusType)},
    createdAt: {type: new GraphQLNonNull(GraphQLString)}
  }
})

module.exports = ContestType
