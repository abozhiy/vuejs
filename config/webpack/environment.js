const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const pug = require('./loaders/pug')
const babelQuasar = require('./loaders/babelQuasar')
const sass = require('./loaders/sass')
const stylus = require('./loaders/stylus')

// environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.loaders.prepend('sass', sass)
environment.loaders.prepend('pug', pug)
environment.loaders.prepend('js', babelQuasar)
environment.loaders.prepend('stylus', stylus)

module.exports = environment
