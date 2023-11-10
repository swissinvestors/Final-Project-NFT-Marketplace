import { useContract } from "@thirdweb-dev/react";
import {
  getMarketplaceAddress,
  getNFTAddress,
  getNFTAddress2,
} from "./getContractAddress";

export const getMarketplaceContract = () => {
  let market_address = getMarketplaceAddress();

  const { contract: marketplace, isLoading: marketplaceLoading } = useContract(
    market_address,
    "marketplace-v3"
  );

  return { marketplace, marketplaceLoading };
};

export const getNFTContract = () => {
  const nft_address = getNFTAddress();
  const { contract: nft_contract, isLoading: nftLoading } =
    useContract(nft_address);
  return { nft_contract, nftLoading };
};

export const getNFTContract2 = () => {
  const nft_address = getNFTAddress2();
  const { contract: nft_contract_2, isLoading: nftLoading } =
    useContract(nft_address);
  return { nft_contract_2, nftLoading };
};
