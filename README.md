# js-tendermint testing repo

Connect to node rpc thought websocket using [js-tendermint](https://github.com/nomic-io/js-tendermint/), subscribe to new blocks and get validators set for each block.

*Problem*: Seems that there's no support for some cosmos rpc calls like `tx_search`, also can't subscribe to new tx using query = `tx.height = 10`.


