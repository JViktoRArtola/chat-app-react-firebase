const withPWA = require('next-pwa')
const withImages = require('next-pwa')
const withSaas = require('next-pwa')
const withPlugins = require('next-pwa')

const prod = process.env.NODE_ENV === 'production'

module.exports = withPlugins([[withSaas], [withPWA], [withImages]], {
    pwa: {
        disable: !prod,
        dest: 'public'
    }
})
