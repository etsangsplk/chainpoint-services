module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    testrpc: {
      host: 'testrpc',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
}
