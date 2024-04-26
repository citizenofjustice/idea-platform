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
      <main className="flex justify-center p-4">{children}</main>
    </>
  );
};

export default Layout;
