const assert = require('assert')
const nextTranslate = require('next-translate')

// ref.: https://nextjs.org/docs/api-reference/next.config.js/introduction
let baseConfig = () => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: 'standalone',
  }
  return nextConfig
}

assert.equal(baseConfig().output, 'standalone')

let calledFunctionConfig = nextTranslate(baseConfig())

assert.equal(calledFunctionConfig.output, 'standalone')

let functionConfig = nextTranslate(baseConfig)

assert.equal(functionConfig.output, 'standalone')

module.exports = nextTranslate({})
