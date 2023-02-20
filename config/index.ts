export default {
    apolloClient: {
        uri: `${process.env.NEXT_PUBLIC_HYGRAPH_URL}`,
        token: `${process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN}`
    },
    googleAnalytics: {
        propertyId: `${process.env.NEXT_PUBLIC_GA_PROPERTY_ID}`,
        client_email: `${process.env.NEXT_PUBLIC_GA_CLIENT_EMAIL}`,
        private_key: `${process.env.NEXT_PUBLIC_GA_PRIVATE_KEY}`,
    }
}