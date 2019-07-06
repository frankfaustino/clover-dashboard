const axios = require('axios')

const server = axios.create({
  baseURL: process.env.ANSWERHUB_ENDPOINT,
  headers: { Authorization: `Basic ${process.env.TEST_AUTH}` }
})

module.exports = {
  getTickets: async spaceId => {
    try {
      let { data } = await server({
        method: 'get',
        url: '/question.json',
        params: { unanswered: true, spaceId, pageSize: 36, sort: 'newest' }
      })
      return data.list.reverse()
    } catch (e) {
      console.log(e)
    }
  },
  getSpaces: async () => {
    try {
      let { data } = await server({ method: 'get', url: '/space.json' })
      return data.list
    } catch (e) {
      console.log(e)
    }
  }
}
