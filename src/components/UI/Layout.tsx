interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout component that wraps page content
 * @param children - contents of the page layout
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="font-inter flex min-h-[100%] justify-center bg-secondary-100 p-4 text-text-800 sm:gap-8">
        {children}
      </main>
    </>
  );
};

export default Layout;
