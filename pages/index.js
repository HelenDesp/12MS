import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold text-green-500">Layout Loaded ?</h1>
        <p className="text-gray-600 mt-2">If you see this, Layout is rendering children.</p>
      </div>
    </Layout>
  );
}