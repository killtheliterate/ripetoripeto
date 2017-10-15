function separateVendorBundle (neutrino) {
  return neutrino.config
      .entry('vendor')
      .add('react')
      .add('react-dom')
}

const reactPreset = [
  'neutrino-preset-react',
  {
    html: {
      title: 'Ripeto Ripeto'
    }
  }
]

const jestPreset = [
  'neutrino-preset-jest',
  {
    setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js'
  }
]

module.exports = {
  options: {
    tests: 'src'
  },
  use: [
    reactPreset,
    jestPreset,
    separateVendorBundle
  ]
}
