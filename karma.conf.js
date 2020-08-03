module.exports = function(config) {
    config.set({
        reporters: ['progress', 'junit'],
        plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-webpack',
      'karma-junit-reporter'
    ],
        junitReporter: {
            useBrowserName: false,
            outputFile: 'test.xml',
            suite: 'test'
        },
        browsers: ['Firefox'],
        files: [
            { pattern: 'test-context.js', watched: false }
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test-context.js': ['webpack']
        },
        webpack: {
            module: {
                loaders: [
                    { test: /\.js/, exclude: /node_modules/, loader: 'babel?presets[]=es2015' }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        },
        singleRun: true
    });
};
