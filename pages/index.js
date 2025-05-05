import React from "react";
import Layout from "../components/Layout";
import ConnectWallet from "../components/ConnectWallet";
import WalletCard from "../components/WalletCard";
import WalletInfoCard from "../components/WalletInfoCard";
import TokenBalances from "../components/TokenBalances";
import TokenTransfer from "../components/TokenTransfer";
import Dashboard from "../components/Dashboard";

const Home = () => {
  return (
    <Layout>
      <div className="p-4 space-y-6">
        <ConnectWallet />
        <WalletCard />
        <WalletInfoCard />
        <TokenBalances />
        <TokenTransfer />
        <Dashboard />
      </div>
    </Layout>
  );
};

export default Home;