module.exports = {
    ci: {
        collect: {
            startServerCommand: "npm run start",
            numberOfRuns: 3,
            url: [
                "http://localhost:3000"
            ],
        },
        asserts: {
            assertions: {
                'categories:performance': ['error', {minScore: .6}],
                'categories:accessibility': ['error', {minScore: .6}],
                'categories:best-practices': ['error', {minScore: .6}],
                'categories:seo': ['error', {minScore: .6}],
            }
        },
        upload: {
            target: "temporary-public-storage"
        },
    }
}