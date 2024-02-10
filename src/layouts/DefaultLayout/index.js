import PropTypes from "prop-types";
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";

function DefaultLayout({ children }) {
  return (
    <div className='bg-cyan-100 min-h-dvh overflow-hidden'>
      <div className='max-w-6xl mx-auto md:p-5'>
        <Header></Header>
        <Navbar></Navbar>
        <div className='flex p-5 md:rounded-xl bg-white shadow-sm md:mt-3'>{children}</div>
        <Footer></Footer>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
