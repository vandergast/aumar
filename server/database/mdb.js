const mdb = (mPool) => {
  return {
    getCounts (user, fieldName) {
      return mPool.collection('users')
        .findOne({userId: user.id})
        .then((userCounts) => {
          userCounts[fieldName]
        })
    }
  }
}

module.exports = mdb
