const express = require('express')
const app = express()

const { port, env } = require('./config/config')
const graphqlHTTP = require('express-graphql')
const ncSchema = require('./schema/schema')

// PostgreSQL Database dependencies
const pg = require('pg')
const pgConfig = require('./config/pg')[env]
const pgPool = new pg.Pool(pgConfig)

// MongoDB Database dependencies
const { MongoClient } = require('mongodb')
const assert = require('assert')
const { url } = require('./config/mongo')[env]

MongoClient.connect(url, (err, mPool) => {
  assert.equal(err, null)
})

app.use('/', graphqlHTTP({
  schema: ncSchema,
  graphiql: true,
  context: { pgPool }
}))

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

