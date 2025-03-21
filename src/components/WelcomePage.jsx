import React from "react";
import WelcomeImage from '../../public/WelcomeImage2.jpg'; // Ensure it's inside src/assets

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-16 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 mt-16">
        <h1 className="text-4xl font-bold">
        Welcome to My Portfolio!
        Hello! I'm <span className="text-pink-500"> Nitin Chamoli</span>, a passionate and aspiring Full-Stack Web Developer eager to build interactive, user-friendly, and scalable web applications.

        </h1>
        <p className="mt-9 text-2xl">
        With strong foundation in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB, I am continuously learning and exploring new technologies to enhance my skills.
        </p>
       
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={WelcomeImage} 
          alt="Can't Load Image" 
          className="hidden lg:block my-10 h-[450px] w-[350px] rounded-3xl shadow-lg border-4 border-gray-300 
                     object-cover transform rotate-2 hover:rotate-0 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Banner;
