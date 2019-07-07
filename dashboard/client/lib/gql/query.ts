import server from './server'

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

export function getTickets(spaceId: string) {
  return server({
    data: {
      query: `{
            tickets(spaceId: ${spaceId}) {
              tickets {
                id
                title
                body
                createdAt
                assignedTo {
                  id
                  name
                  image_url
                }
                author {
                  id
                  username
                }
                topics {
                  id
                  name
                }
              }
            }
          }`
    }
  })
}

export const getTotalCount = (spaceId: string) =>
  server({
    data: {
      query: `{
        tickets(spaceId: ${spaceId}) {
          totalCount
        }
      }`
    }
  })
