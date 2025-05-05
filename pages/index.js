import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          ReVerse Genesis Wallet Starter is Working ✅
        </h1>
        <p className="mt-4 text-center text-gray-700">
          Tailwind and Layout rendering confirmed.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
