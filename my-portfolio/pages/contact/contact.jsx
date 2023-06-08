import React from "react";

import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { useEffect } from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      class="md:border md:border-cyan-300/5 md:w-1/2 md:mx-auto">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex items-center justify-center flex-wrap">
        <h1 className="text-cyan-300 md:text-xl text-sm md:pt-10 md:mb-2 mb-2 md:mr-4 w-11/12 md:w-2/3 font-semibold tracking-tight flex items-center justify-center">
          <span className="text-cyan-300 md:text-base text-xs md:pr-4 pr-2">
            04.
          </span>{" "}
          What next? {/* you can use full in the width as well */}{" "}
        </h1>
        <h1 className="text-gray-300 md:text-5xl text-3xl md:py-7 md:mb-2 mb-5 w-11/12 md:w-2/3 font-semibold tracking-tight flex items-center justify-center">
          Get In Touch
        </h1>
        <p class="mb-8 lg:mb-16 md:w-10/12 font-normal text-center text-white sm:text-lg text-sm">
          I’m currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I’ll try my
          best to get back to you!
        </p>
        <form action="#" class="space-y-8 py-8">
          <button
            type="submit"
            class="hover:shadow hover:shadow-cyan-300 duration-300 hover:transition-shadow border border-cyan-300 py-3 px-5 text-sm font-medium text-center text-cyan-300 rounded bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:paulrichardevs@gmail.com?subject=Hello&body=%0D%0A%0D%0AThanks%20for%20your%20email.%0D%0A%0D%0ABest%2C%0D%0A">
              Send message
            </a>
          </button>
        </form>
        <div className="md:w-full w-5/6 md:mb-5 mt-16">
          {" "}
          <ul className="flex justify-center items-center">
            <li>
              <a
                rel="noreferrer"
                href="https://www.instagram.com/richardpaul06/"
                target={"_blank"}>
                <FiInstagram className="text-gray-300/80 text-xl block mx-2 cursor-pointer  hover:text-cyan-300/80 hover:-translate-y-1 hover:transition duration-100" />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://paulrichardevs@gmail.com"
                target={"_blank"}>
                <FiMail className="text-cyan-300/80 text-xl block cursor-pointer hover:text-gray-300/80 hover:-translate-y-1 hover:transition duration-100" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="pb-5">
        <a
          href="https://github.com/PaulRichardCode/2023-OFFICIAL-PORTFOLIO"
          className="text-gray-400/80 font-normal text-sm font-mono flex justify-center hover:text-cyan-300 hover:transition-colors duration-200">
          Designed & Built by Paul Richard
        </a>
      </p>
    </section>
  );
};

export default Contact;
