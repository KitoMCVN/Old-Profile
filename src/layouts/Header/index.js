import Discord from "../../api/userInfo";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className='p-5 md:rounded-xl bg-white shadow-sm text-neutral-800'>
      <Discord></Discord>
      <div className='flex mt-4 gap-2 text-xl'>
        <Tippy animation='scale' content='Gmail'>
          <a target='_blank' rel='noopener noreferrer' className='rounded-full bg-cyan-200 size-[38px] items-center flex justify-center hover:bg-cyan-500' href='kitomcchill@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </Tippy>
        <Tippy animation='scale' content='Github'>
          <a target='_blank' rel='noopener noreferrer' className='rounded-full bg-cyan-200 size-[38px] items-center flex justify-center hover:bg-cyan-500' href='https://github.com/kitomcvn'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Tippy>
        <Tippy animation='scale' content='Discord'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full bg-cyan-200 size-[38px] items-center flex justify-center hover:bg-cyan-500'
            href='https://discordredirect.discordsafe.com/users/915876843884777472'>
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </Tippy>
        <Tippy animation='scale' content='Youtube'>
          <a target='_blank' rel='noopener noreferrer' className='rounded-full bg-cyan-200 size-[38px] items-center flex justify-center hover:bg-cyan-500' href='https://youtube.com/@kitomc'>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </Tippy>
        <Tippy animation='scale' content='Facebook'>
          <a target='_blank' rel='noopener noreferrer' className='rounded-full bg-cyan-200 size-[38px] items-center flex justify-center hover:bg-cyan-500' href='https://fb.com/kitomcvn'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </Tippy>
      </div>
    </div>
  );
}

export default Header;
