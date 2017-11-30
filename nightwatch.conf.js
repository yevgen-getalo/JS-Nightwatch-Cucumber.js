var seleniumServer = require('selenium-server')
var nightwatchCucumber = require('nightwatch-cucumber')
var chromeDriver = require('chromedriver');

// Handles the runner, location of feature files and step definitions,
// and closing of nightwatch
var nightwatchCucumberConf = {
    runner: 'nightwatch',
    featureFiles: 'features',
    stepDefinitions: 'step_definitions',
    closeSession: 'afterScenario'
}

module.exports = {
    // Loads nightwatch-cucumber configuration into main nightwatch.js conf file
    src_folders: [nightwatchCucumber(nightwatchCucumberConf)],
    custom_commands_path: '',
    custom_assertions_path: '',
    page_objects_path: '',
    live_output: false,
    disable_colors: false,

    // Sets configuration for Selenium Server
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        start_session: true,
        chromedriver: chromeDriver.path,
    },

    // Sets config options for different testing environments defined by the user
    //test_workers: {"enabled" : true, "workers" : "auto"},
    test_settings: {
        default: {
            launch_url: '',
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions : {
                    args: [
                        //'--headless', '--disable-gpu'
                    '--window-size=1024,768']
                }
            },
            screenshots: {
                enabled: true,
                on_error: true,
                on_failure: true,
                path: 'screenshots'
            }
        }
    }
}
