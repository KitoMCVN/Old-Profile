import { Link } from "react-router-dom";

function Nav() {
  const navItemStyle = "flex gap-1 bg-cyan-200 px-2 py-[2px] rounded-md hover:bg-cyan-500 transition";

  const aboutIcon = (
    <svg className='w-5 h-5 text-yellow-500 translate-y-[1px]' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
      <path
        fillRule='evenodd'
        d='M15.5 3.3a1 1 0 0 0-1.4 0l-2 2h.1l6.5 6.5 2-1.9c.4-.4.4-1 0-1.4l-5.2-5.2ZM7 8.3l3.9-1.5 6.3 6.3-1.5 3.9a1 1 0 0 1-.6.6l-9.5 3.3a1 1 0 0 1-1-.1l6.5-6.5A1 1 0 0 0 9.7 13l-6.5 6.4a1 1 0 0 1-.1-1L6.4 9c.1-.3.3-.5.6-.6Z'
        clipRule='evenodd'
      />
    </svg>
  );

  const projectIcon = (
    <svg className='w-5 h-5 text-purple-600 translate-y-[1px]' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
      <path
        fillRule='evenodd'
        d='M4.9 3C3.9 3 3 3.8 3 4.9V9c0 1 .8 1.9 1.9 1.9H9c1 0 1.9-.8 1.9-1.9V5c0-1-.8-1.9-1.9-1.9H5Zm10 0c-1 0-1.9.8-1.9 1.9V9c0 1 .8 1.9 1.9 1.9H19c1 0 1.9-.8 1.9-1.9V5c0-1-.8-1.9-1.9-1.9h-4Zm-10 10c-1 0-1.9.8-1.9 1.9V19c0 1 .8 1.9 1.9 1.9H9c1 0 1.9-.8 1.9-1.9v-4c0-1-.8-1.9-1.9-1.9H5Zm10 0c-1 0-1.9.8-1.9 1.9V19c0 1 .8 1.9 1.9 1.9H19c1 0 1.9-.8 1.9-1.9v-4c0-1-.8-1.9-1.9-1.9h-4Z'
        clipRule='evenodd'
      />
    </svg>
  );

  const skillIcon = (
    <svg className='w-5 5-5 text-pink-600 translate-y-[-1px]' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
      <path fillRule='evenodd' d='M15 4H9v16h6V4Zm2 16h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3v16ZM4 4h3v16H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z' clipRule='evenodd' />
    </svg>
  );

  const gameIcon = (
    <svg className='w-5 h-5 text-emerald-600 translate-y-[1px]' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
      <path fillRule='evenodd' d='M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z' clipRule='evenodd' />
      <path fillRule='evenodd' d='M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.4 0 .7 0 1 .2V5a2 2 0 0 0-2-2H5Zm4 10H3v2c0 1.1.9 2 2 2h4v-4Z' clipRule='evenodd' />
    </svg>
  );

  const specIcon = (
    <svg className='w-5 h-5 text-cyan-950 translate-y-[1px]' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
      <path
        fillRule='evenodd'
        d='M4.9 3C3.9 3 3 3.8 3 4.9V9c0 1 .8 1.9 1.9 1.9H9c1 0 1.9-.8 1.9-1.9V5c0-1-.8-1.9-1.9-1.9H5Zm10 0c-1 0-1.9.8-1.9 1.9V9c0 1 .8 1.9 1.9 1.9H19c1 0 1.9-.8 1.9-1.9V5c0-1-.8-1.9-1.9-1.9h-4Zm-10 10c-1 0-1.9.8-1.9 1.9V19c0 1 .8 1.9 1.9 1.9H9c1 0 1.9-.8 1.9-1.9v-4c0-1-.8-1.9-1.9-1.9H5ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z'
        clipRule='evenodd'
      />
    </svg>
  );

  return (
    <div className='flex md:p-2 pb-8 py-2 px-5 md:rounded-xl bg-white shadow-sm md:mt-3 md:border-none '>
      <div className='flex gap-3 text-neutral-800 font-bold text-base flex-wrap'>
        <Link to='/'>
          <div className={navItemStyle}>About {aboutIcon}</div>
        </Link>
        <Link to='/projects'>
          <div className={navItemStyle}>Projects {projectIcon}</div>
        </Link>
        <Link to='/skills'>
          <div className={navItemStyle}>Skills {skillIcon}</div>
        </Link>
        <Link to='/games'>
          <div className={navItemStyle}>Games {gameIcon}</div>
        </Link>
        <Link to='/specs'>
          <div className={navItemStyle}>Specs {specIcon}</div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
