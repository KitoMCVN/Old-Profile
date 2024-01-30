import PropTypes from "prop-types";
import Header from "../Header";
import Navbar from "../Navbar";

function DefaultLayout({ children }) {
  return (
    <div className='bg-cyan-100 min-h-dvh'>
      <div className='max-w-6xl mx-auto p-5'>
        <Header></Header>
        <Navbar></Navbar>
        <div className='flex p-5 rounded-xl bg-white shadow-sm mt-3'>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
