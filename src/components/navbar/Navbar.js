import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className='w-16 h-16 ml-6 mt-4'>
        <img src={logo} alt="logo" className='rounded-full' />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32 rounded-full" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                Aspiring software developer with a passion for problemsolving and a effective communicator with a keen interest in collaborative work
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/prabhatthakur672/" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>

            <a href="https://github.com/prabhatthakur672" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            
            
            <a href="https://leetcode.com/Pt672839/" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
               <img className='h-6 w-6 rounded-full bg-white' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEzLjQ4MyAwYTEuMzcgMS4zNyAwIDAgMC0uOTYxLjQzOEw3LjExNiA2LjIyNmwtMy44NTQgNC4xMjZhNS4zIDUuMyAwIDAgMC0xLjIwOSAyLjEwNGE1IDUgMCAwIDAtLjEyNS41MTNhNS41IDUuNSAwIDAgMCAuMDYyIDIuMzYyYTYgNiAwIDAgMCAuMzQ5IDEuMDE3YTUuOSA1LjkgMCAwIDAgMS4yNzEgMS44MThsNC4yNzcgNC4xOTNsLjAzOS4wMzhjMi4yNDggMi4xNjUgNS44NTIgMi4xMzMgOC4wNjMtLjA3NGwyLjM5Ni0yLjM5MmMuNTQtLjU0LjU0LTEuNDE0LjAwMy0xLjk1NWExLjM4IDEuMzggMCAwIDAtMS45NTEtLjAwM2wtMi4zOTYgMi4zOTJhMy4wMiAzLjAyIDAgMCAxLTQuMjA1LjAzOGwtLjAyLS4wMTlsLTQuMjc2LTQuMTkzYy0uNjUyLS42NC0uOTcyLTEuNDY5LS45NDgtMi4yNjNhMi43IDIuNyAwIDAgMSAuMDY2LS41MjNhMi41NSAyLjU1IDAgMCAxIC42MTktMS4xNjRMOS4xMyA4LjExNGMxLjA1OC0xLjEzNCAzLjIwNC0xLjI3IDQuNDMtLjI3OGwzLjUwMSAyLjgzMWMuNTkzLjQ4IDEuNDYxLjM4NyAxLjk0LS4yMDdhMS4zODQgMS4zODQgMCAwIDAtLjIwNy0xLjk0M2wtMy41LTIuODMxYy0uOC0uNjQ3LTEuNzY2LTEuMDQ1LTIuNzc0LTEuMjAybDIuMDE1LTIuMTU4QTEuMzg0IDEuMzg0IDAgMCAwIDEzLjQ4MyAwbS0yLjg2NiAxMi44MTVhMS4zOCAxLjM4IDAgMCAwLTEuMzggMS4zODJhMS4zOCAxLjM4IDAgMCAwIDEuMzggMS4zODJIMjAuNzlhMS4zOCAxLjM4IDAgMCAwIDEuMzgtMS4zODJhMS4zOCAxLjM4IDAgMCAwLTEuMzgtMS4zODJ6Ii8+PC9zdmc+" alt="" />
              </span>
            </a>

            <a href="https://twitter.com/prabhatthakur67" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar