import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='flex p-2 rounded-xl bg-white shadow-sm mt-3 gap-2'>
      <Link to='/projects'>Projects</Link>
      <Link to='/specs'>Specs</Link>
      <Link to='/skills'>Skills</Link>
      <Link to='/games'>Games</Link>
      <Link to='/info'>Info</Link>
    </div>
  );
}

export default Nav;
