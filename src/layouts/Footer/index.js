function Footer() {
  return (
    <div className='flex p-5 md:rounded-xl bg-white shadow-sm md:mt-3'>
      <div className='sm:flex text-center justify-between text-sm w-full text-neutral-800 font-medium'>
        <p>
          2024 © KitoMC • Made with{" "}
          <a href='https://react.dev/' target='_blank' rel='noopener noreferrer' className='text-cyan-500'>
            React
          </a>{" "}
          x{" "}
          <a href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer' className='text-cyan-500'>
            Tailwind
          </a>
        </p>
        <p>
          <a className='text-cyan-500' href='https://omar11.sa/' target='_blank' rel='noopener noreferrer'>
            Omar Abdulaziz <span className='text-neutral-800'>•</span> ✨
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
