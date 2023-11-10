import NFTCard from "@/components/NFTCard";
import Layout from "@/layout/Layout";
import { useAddress } from "@thirdweb-dev/react";
import WalletCollection1 from "./walletCollection1";
import WalletCollection2 from "./walletCollection2";

export default function Wallet() {
  const address = useAddress();

  return (
    <Layout>
      <div>
        <h1 className="text-6xl font-semibold my-4 text-center">My NFTs</h1>

        {!address && (
          <div>
            <div className="text-center">
              You need to connect your wallet first!
            </div>
          </div>
        )}

        <WalletCollection1 />
        <WalletCollection2 />
      </div>
    </Layout>
  );
}
