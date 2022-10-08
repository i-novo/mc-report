import { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
    globalSetup: require.resolve("./globalSetup"),
    timeout: 60000,
    retries: 0,
    testDir: 'tests/',
    use: {
        headless: false,
        viewport: {height: 720, width: 1920},
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'off',
        baseURL: 'https://example.coma/'
    },
    reporter: [
        ["line"],
        ["html", { open: "never" }],
        ['monocart-reporter', {  
          outputFile: 'playwright-report/grid/index.html'
        }]
    ]
}

export default config
