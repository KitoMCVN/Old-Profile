import Discord from "../../hook/userInfo";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";

function Header() {
  return (
    <div className='p-5 md:rounded-xl bg-white shadow-sm'>
      <Discord></Discord>
      <div className='flex mt-4 gap-2'>
        <Tippy animation='scale' content='Gmail'>
          <a target='_blank' rel='noopener noreferrer' className='rounded-full bg-cyan-200 p-[6px] hover:bg-cyan-500' href='kitomcchill@gmail.com'>
            <svg className='w-6 h-6 text-neutral-800' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.5a6 6 0 0 1 1.5 4v4a1 1 0 1 1-2 0v-4a4 4 0 0 0-4-4h-.5C5 6 3 8 3 10.5V16c0 .6.4 1 1 1h7v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h5c.6 0 1-.4 1-1v-6a4 4 0 0 0-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z' />
            </svg>
          </a>
        </Tippy>
        <Tippy animation='scale' content='Github'>
          <a target='_blank' rel='noopener noreferrer' className='rounded-full bg-cyan-200 p-[6px] hover:bg-cyan-500' href='https://github.com/kitomcvn'>
            <svg className='w-6 h-6 text-neutral-800' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
              <path
                fillRule='evenodd'
                d='M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </Tippy>
        <Tippy animation='scale' content='Discord'>
          <a target='_blank' rel='noopener noreferrer' className='rounded-full bg-cyan-200 p-[6px] hover:bg-cyan-500' href='https://discordredirect.discordsafe.com/users/915876843884777472'>
            <svg className='w-6 h-6 text-neutral-800' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M19 5.6c-1.4-.7-2.8-1.1-4.2-1.3l-.5 1c-1.5-.2-3-.2-4.6 0l-.5-1c-1.4.2-2.8.6-4.1 1.3a17.4 17.4 0 0 0-3 11.6 18 18 0 0 0 5 2.5c.5-.5.8-1.1 1.1-1.7l-1.7-1c.2 0 .3-.2.4-.3a11.7 11.7 0 0 0 10.2 0l.4.3-1.7.9 1 1.7c1.9-.5 3.6-1.4 5.1-2.6.4-4-.6-8.2-3-11.5ZM8.6 14.8a2 2 0 0 1-1.8-2 2 2 0 0 1 1.8-2 2 2 0 0 1 1.8 2 2 2 0 0 1-1.8 2Zm6.6 0a2 2 0 0 1-1.8-2 2 2 0 0 1 1.8-2 2 2 0 0 1 1.8 2 2 2 0 0 1-1.8 2Z' />
            </svg>
          </a>
        </Tippy>
        <Tippy animation='scale' content='Youtube'>
          <a target='_blank' rel='noopener noreferrer' className='rounded-full bg-cyan-200 p-[6px] hover:bg-cyan-500' href='https://youtube.com/@kitomc'>
            <svg className='w-6 h-6 text-neutral-800' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
              <path
                fillRule='evenodd'
                d='M21.7 8c0-.7-.4-1.3-.8-2-.5-.5-1.2-.8-2-.8C16.2 5 12 5 12 5s-4.2 0-7 .2c-.7 0-1.4.3-2 .9-.3.6-.6 1.2-.7 2l-.2 3.1v1.5c0 1.1 0 2.2.2 3.3 0 .7.4 1.3.8 2 .6.5 1.4.8 2.2.8l6.7.2s4.2 0 7-.2c.7 0 1.4-.3 2-.9.3-.5.6-1.2.7-2l.2-3.1v-1.6c0-1 0-2.1-.2-3.2ZM10 14.6V9l5.4 2.8-5.4 2.8Z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </Tippy>
        <Tippy animation='scale' content='Facebook'>
          <a target='_blank' rel='noopener noreferrer' className='rounded-full bg-cyan-200 p-[6px] hover:bg-cyan-500' href='https://fb.com/kitomcvn'>
            <svg className='w-6 h-6 text-neutral-800' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
              <path fillRule='evenodd' d='M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z' clipRule='evenodd' />
            </svg>
          </a>
        </Tippy>
      </div>
    </div>
  );
}

export default Header;
