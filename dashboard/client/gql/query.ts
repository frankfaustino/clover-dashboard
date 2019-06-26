import server from '../server'

export function getSpaces() {
  return server({
    data: {
      query: `{
            spaces {
              id 
              name
            }
          }`
    }
  })
}

export function getTickets(spaceId?) {
  return server({
    data: {
      query: `{
            tickets(spaceId: ${spaceId}) {
              id
              title
              body
              createdAt
            }
          }`
    }
  })
}
