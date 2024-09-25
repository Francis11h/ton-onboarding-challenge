
// write your NFT miner here

import { Address, TonClient } from "ton"
import { getHttpEndpoint } from "@orbs-network/ton-access";


async function main() {

  const wallet = Address.parse('0QDu_e-HgyyjRhllGzXkBcAYbq48bMAaRzy-La7ALxmUiFC1');
  const collection = Address.parse('EQDk8N7xM5D669LC2YACrseBJtDyFqwtSPCNhRWXU7kjEptX');

  // get the decentralized RPC endpoint in Testnet
  const endpoint = await getHttpEndpoint({
    network: "testnet",
  });

  // initialize ton library
  const client = new TonClient({ endpoint });
  const miningData = await client.callGetMethod(collection, 'get_mining_data')
  console.log(miningData)

  // (
  //     int pow_complexity,
  //     int last_success,
  //     int seed,
  //     int target_delta,
  //     int min_cpl,
  //     int max_cpl
  // )
}




main()