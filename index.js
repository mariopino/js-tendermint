const { RpcClient } = require('tendermint')
const client = RpcClient('wss://lunie.mariopino.es:46657')

// Subscribe to new blocks and get validator set
async function subscribeToNewBlock() {
  client.subscribe({ query: "tm.event = 'NewBlock'"}, async (res, err)=> {
    let height = res.block.header.height
    console.log(`Block: #${height}`)
    console.log(res)
    const validators = await getValidators(height)
    console.log(`Validators set for block: #${height}`)
    console.log(validators)
    const tx = await getTx(height)
    console.log(tx)
  })
}

/* DIDN'T WORK */
async function subscribeToNewTx() {
  client.subscribe({ query: "tx.height = 10"}, (event) => {
    console.log(event)
  })
}

async function getBlock(blockHeight) {
  client.block({ height: blockHeight})
    .then((res) => console.log(res))
}

async function getValidators(blockHeight) {
  return validators = await client.validators({ height: blockHeight})
}

async function getTx(blockHeight) {
  return tx = await client.tx({ query: `tx.height=${blockHeight}`})
}


//subscribeToNewBlock()
subscribeToNewTx()

// for(let height = 1; height <= 100; height++) {
//  getBlock(1);
// }