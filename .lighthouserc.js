module.exports = {
    ci: {
        collect: {
            startServerCommand: "npm run build && npm run start",
            startServerReadyPattern: "ready on",
            numberOfRuns: 1,
            url: [
                "http://localhost:3000"
            ],
            settings: {
                preset: "desktop"
            },
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
        server: {}
    }
}