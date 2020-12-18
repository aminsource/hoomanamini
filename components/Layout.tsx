import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta from "./meta";
// import Alert from "./alert";

interface Props {
  title?: string;
  transparent?: boolean;
  preview?: boolean;
}

const Layout = (props: PropsWithChildren<Props>) => {
  return (
    <div>
      <Meta title={props.title} />
      <header>
        <Navbar transparent={false} />
      </header>
      <main>
        {/* <Alert preview={false} /> */}
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
