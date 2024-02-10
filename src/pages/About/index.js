function About() {
  return (
    <div className='font-bold text-neutral-800 w-full pb-4'>
      <div className='mb-3 flex text-3xl gap-2 font-bold'>
        <div className='bg-neutral-800 h-[36px] w-2'></div>
        <h2>About 💤</h2>
      </div>
      <div className='mt-8 md:grid grid-cols-2 font-semibold'>
        <div>
          <h4 className='text-2xl font-bold'>
            <span className='text-cyan-500 text-[26px]'>#</span> Về tui ✨
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt dolores error ducimus, iste delectus dicta nostrum, laboriosam a, officia illum necessitatibus recusandae adipisci non nemo quibusdam sed ab
            asperiores placeat.
          </p>
        </div>
        <div className='mx-auto mt-0 md:mx-0 md:mt-8 md:pr-6 lg:pr-12 md:block hidden'>
          <svg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 24 24' className='float-right h-72 w-72 rounded-lg border-8 border-dashed border-slate-200 bg-slate-100 fill-slate-200 px-12'>
            <g fillRule='evenodd' clipRule='evenodd'>
              <path d='M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0'></path>
              <path d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21'></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default About;
