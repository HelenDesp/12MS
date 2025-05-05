const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="max-w-4xl mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
