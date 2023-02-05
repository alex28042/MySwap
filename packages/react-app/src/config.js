import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x68CA639C0bCB5Ee8534F77270D928Bdb84F361D0"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/D5kYMxJLCwUr9Q3fPU7nHaBkjsx8HA-B",
  },
};