// https://eth-goerli.g.alchemy.com/v2/z7QfTsWEvSwh--LENMOUHUIO1rdkRlH2

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/z7QfTsWEvSwh--LENMOUHUIO1rdkRlH2',
      accounts: [ 'd2f4746927d637ab3c1dbba2f8fc488e1dee2dccfe939354baceea767a2546db' ]
    }
  }
}