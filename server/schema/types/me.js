const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt
} = require('graphql')
const pgdb = require('../../database/pgdb')
const mdb = require('../../database/mdb')
const ContestType = require('./contest.js')

const MeType = new GraphQLObjectType({
  name: 'MeType',
  fields: {
    id: {type: GraphQLID},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    fullName: {
      type: GraphQLString,
      resolve: (obj) => {
        return `${obj.firstName} ${obj.lastName}`
      }
    },
    email: {type: new GraphQLNonNull(GraphQLString)},
    createdAt: {type: GraphQLString},
    contests: {
      type: new GraphQLList(ContestType),
      resolve: (obj, args, {pgPool}) => {
        return pgdb(pgPool).getContests(obj)
      }
    },
    contestsCount: {
      type: GraphQLInt,
      resolve: (obj, args, {mPool}, {fieldName}) => {
        return mdb(mPool).getCounts(fieldName)
      }
    },
    votesCount: {
      type: GraphQLInt,
      resolve: (obj, args, {mPool}, {fieldName}) => {
        return mdb(mPool).getCounts(fieldName)
      }
    },
    namesCount: {
      type: GraphQLInt,
      resolve: (obj, args, {mPool}, {fieldName}) => {
        return mdb(mPool).getCounts(fieldName)
      }
    }
  }
})

module.exports = MeType
