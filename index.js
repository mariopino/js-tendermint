let { RpcClient } = require('tendermint')

// some full node's RPC port
//let client = RpcClient('wss://lunie.mariopino.es:46657')

// request a block
//client.block({ height: 100 })
//  .then((res) => console.log(res))

let client = RpcClient('wss://lunie.mariopino.es:46657')

client.subscribe({ query: "tm.event = 'NewBlock'"}, (event, err) => {
  console.log(event)
  /*
    {
      name: 'NewBlock',
      data: {
        type: 'new_block',
        data: {
          block: [
            {
              txs: []
            }
          ]
        }
      }
    }
  */
})
