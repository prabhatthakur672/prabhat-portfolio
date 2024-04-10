import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="WhatsConnect"
          des="WhatsConnect simplifies starting WhatsApp conversations without saving 
              contacts. Enter a number, click 'chat,' and connect directly, saving no 
              contacts. It stores contacts locally and generates QR codes for instant chatting. "
          src={projectOne}
          gitlink="https://github.com/prabhatthakur672/whats-connect"
          livelink="https://whats-connect.vercel.app/"
        />
        <ProjectsCard
          title="CryptoChecker"
          des=" CryptoChecker is a comprehensive tool providing all cryptocurrency-related data 
          at your fingertips. From live prices to historical trends, it offers a complete 
          overview. Stay informed and make informed decisions with CryptoChecker."
          src={projectTwo}
          gitlink="https://github.com/prabhatthakur672/crypto-app"
          livelink="https://crypto-app-five-tau.vercel.app/"
        />
        <ProjectsCard
          title="Weather App"
          des=" The Weather App simplifies accessing global weather forecasts by searching for 
          any location. With just the name of a place, users can quickly retrieve accurate 
          weather information. Stay informed about weather conditions worldwide effortlessly 
          with the Weather App."
          src={projectThree}
          gitlink="https://github.com/prabhatthakur672/weatherApp"
          livelink="https://weather-site-six.vercel.app/"
        />
        <ProjectsCard
          title="Text to Voice Generator"
          des=" The Text-to-Voice Generator transforms written text into spoken words seamlessly.
           Simply input your text, and it generates lifelike voices for various applications. 
           From narration to accessibility, it offers versatile voice generation capabilities with ease."
          src={projectFour}
          gitlink="https://github.com/prabhatthakur672/Text-to-voice"
          livelink="https://prabhatthakur672.github.io/Text-to-voice/"
        />
        
      </div>
    </section>
  );
}

export default Projects