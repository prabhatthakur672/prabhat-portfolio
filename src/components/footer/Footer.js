import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black ">
      <div className="w-full h-full flex flex-col justify-center items-center gap-8">
        <img className="w-32 rounded-full" src={logo} alt="logo"/>
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
      {/* <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              About
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Portfolio
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Services
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Blog
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              System Status
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Terms of Service
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Pricing
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Over Right
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Documentation
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              API Reference
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Support
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Open Source
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Footer