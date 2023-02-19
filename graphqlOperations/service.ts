import { gql } from "@apollo/client"

export default {
  Queries: {
    getServices: gql`
        query GetMyServices {
            services {
                id
                title
                desc
                type
            }
        }
    `,
  },
}
