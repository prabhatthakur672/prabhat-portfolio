import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Computer Science"
            subTitle="Noida Institute of Engineering and Technology (Greater Noida)"
            result="2020 - 24"
            des="B. Tech teaches fundamental principles of computing, including algorithms, data structures, and programming languages. Additionally, it explores advanced topics such as artificial intelligence, computer networks, and software engineering "
          />
          <ResumeCard
            title="Intermediate"
            subTitle="St. Columbus Inter College (Lucknow)"
            result="2018 - 19"
            des="In Intermediate,  students delve deeper into topics like calculus, physics, chemistry, literature, and economics, fostering critical thinking and analytical skills."
          />
          <ResumeCard
            title="High School"
            subTitle="Daffodils Convent Inter College (Lucknow)"
            result="2016 - 17"
            des=" High School emphasizes foundational skills, problem-solving abilities, and essential knowledge necessary for academic and personal development."
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education