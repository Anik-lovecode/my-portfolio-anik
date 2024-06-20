import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Welcome to my portfolio! 
        I'm a full stack developer dedicated to crafting exceptional digital experiences. 
        With expertise in front-end and back-end development, I specialize in creating dynamic web applications. 
        I thrive on turning ideas into reality, leveraging my skills in HTML, CSS, JavaScript, Node, and more. 
        Committed to client satisfaction, I prioritize understanding your needs and delivering innovative solutions. 
        Explore my portfolio to see examples of my work, and let's collaborate to bring your digital vision to life!
        </p>

        <br />
        <br />
        <br />


        <p className="text-xl">
        I'm an entrepreneur passionate about innovation and creating positive change.
        With a focus on strategic thinking and problem-solving, I thrive in dynamic environments. 
        Let's explore opportunities and shape the future together.
        </p>
      </div>
    </div>
  );
};

export default About
