import Header from "./Header";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
