import { getNFTContract } from "@/util/getContracts";
import { useAddress, useOwnedNFTs } from "@thirdweb-dev/react";
import NFTCard from "@/components/NFTCard";

export default function walletCollection2() {
  const { nft_contract } = getNFTContract();
  const address = useAddress();

  const { data: ownedNFTs, isLoading } = useOwnedNFTs(nft_contract, address);

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
