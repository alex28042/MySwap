import { useConfig } from "@usedapp/core";
import { fastEncodingMulticall } from "@usedapp/core/dist/esm/src/providers";
import React, { useEffect, useState } from "react";
import { ROUTER_ADDRESS } from "../config";
import Web3 from "web3";
import { getFactoryInfo, getRouterInfo } from "../utils";

export const loadPools = async (providerUrl) => {
  const provider = new Web3.providers.HttpProvider(providerUrl);
  const web3 = new Web3(provider);

  const routerInfo = await getRouterInfo(ROUTER_ADDRESS, web3);
  const factoryInfo = await getFactoryInfo(routerInfo.factory, web3);

  console.log({factoryInfo});

  return factoryInfo.pairsInfo;
};

function usePools() {
  const { readOnlyChainId, readOnlyUrls } = useConfig();
  const [loading, setLoading] = useState(true);
  const [pools, setPools] = useState({});

  useEffect(() => {
    loadPools(readOnlyUrls[readOnlyChainId]).then((pools) => {
      setPools(pools);
      setLoading(false);
    });
  }, [readOnlyChainId, readOnlyUrls]);

  return [loading, pools];
}

export default usePools;
