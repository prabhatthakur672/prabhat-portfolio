import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Prabhat Thakur</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Aspiring software developer with a passion for problemsolving and a
        effective communicator with a keen interest in collaborative work
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9696399698</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">prabhatthakur672@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft