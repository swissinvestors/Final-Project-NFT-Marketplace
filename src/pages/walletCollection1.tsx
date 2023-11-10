import { getNFTContract2 } from "@/util/getContracts";
import { useAddress, useOwnedNFTs } from "@thirdweb-dev/react";
import NFTCard from "@/components/NFTCard";

export default function WalletCollection1() {
  const { nft_contract_2 } = getNFTContract2();
  const address = useAddress();

  const { data: ownedNFTs, isLoading } = useOwnedNFTs(nft_contract_2, address);

  return (
    <div>
      {address && isLoading ? (
        <div className="text-center">Loading NFT Data..</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 ">
          {ownedNFTs &&
            ownedNFTs.map((nft, id) => {
              return <NFTCard key={id} {...nft} />;
            })}
        </div>
      )}
    </div>
  );
}
