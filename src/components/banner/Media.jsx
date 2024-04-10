import React from 'react'

import {FaGit, FaGithub, FaJsSquare,FaTwitter, FaLinkedinIn, FaReact, FaPython, FaDatabase } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-col gap-6 lgl:gap-6 justify-between">
        <div>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <FaJsSquare />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaDatabase />
            </span>
            <span className="bannerIcon">
              <FaGit />
            </span>
            

          </div>
        </div>
      </div>
  )
}

export default Media