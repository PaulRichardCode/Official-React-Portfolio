import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Paul Richard Portfolio</title>

        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons cursor-pointer dark:text-white">
              Deployedbyrichy
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  className=" cursor-pointer dark:text-white text-2xl"
                />
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1b0rHgz-cOFSayHc7v1c9gpqj2vRrl47h/edit?usp=sharing&ouid=101790229859116884693&rtpof=true&sd=true"
                  className=" bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 ">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="	text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Paul Richard
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              FrontEnd Developer and designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
              Freelancer providing service for your programming needs. Join me
              below, and let achieve your goals.
            </p>
          </div>
          <div className=" pb-10 text-5xl flex justify-center gap-16 py3 text-gray-600">
            <a href="https://www.linkedin.com/in/richard-paul-11321124b/">
              <AiFillLinkedin className="cursor-pointer hover:text-teal-700 dark:text-white " />
            </a>
            <a href="https://twitter.com/RichC0DE">
              <AiFillTwitterCircle className="cursor-pointer hover:text-teal-700 dark:text-white" />
            </a>
            <a href="https://github.com/PaulRichardCode">
              <AiFillGithub className="cursor-pointer hover:text-teal-700 dark:text-white" />
            </a>
          </div>
          <div className=" overflow-hidden mx-auto relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" alt="avatar" />
          </div>
        </section>
        {/* SECTION 2222 */}

        <section>
          <div>
            <h3 className="text-3xl py-5 text-center dark:text-white">
              Services i offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 max-w-xl mx-auto text-center dark:text-gray-300">
              Since the beginning of my Journey has a freelance frontend
              developer, I have done remote work for several
              <span className="text-teal-500 cursor-pointer">
                {" "}
                startups
              </span>{" "}
              and
              <span className="text-teal-500 cursor-pointer"> companies</span>.
              I have collaborated with talented people to create for both
              business and consumer use. I offer from a wide range of services,
              including programming and teaching.
            </p>
          </div>

          <div className="lg:flex lg:items-start lg:justify-center">
            <div className=" flex justify-center flex-col text-center items-center shadow-lg p-10 rounded-xl py-10 dark:bg-gray-800  flex-1">
              <Image alt="design" src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-gray-300">
                {" "}
                Creating elegant designs suited for you
              </p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-grey-800 py-1 dark:text-gray-300">Figma</p>
              <p className="text-grey-800 py-1 dark:text-gray-300">Adobe XD</p>
              <p className="text-grey-800 py-1 dark:text-gray-300">Photoshop</p>
            </div>
            <div className=" flex justify-center flex-col items-center shadow-lg p-10 rounded-xl py-10 max-w-lg mx-auto flex-1 ">
              <Image alt="code" src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Frontend Developer
              </h3>
              <p className="py-2 text-center dark:text-gray-300">
                {" "}
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>
              <h4 className="py-4 text-teal-600">Language i use</h4>
              <p className="text-grey-800 py-1 dark:text-gray-300">HTML</p>
              <p className="text-grey-800 py-1 dark:text-gray-300">CSS</p>
              <p className="text-grey-800 py-1 dark:text-gray-300">Bootstrap</p>
              <p className="text-grey-800 py-1 dark:text-gray-300">Tailwind</p>
              <p className="text-grey-800 py-1 dark:text-gray-300">
                JavaScript
              </p>
              <p className="text-grey-800 py-1 dark:text-gray-300">React.js</p>
              <p className="text-grey-800 py-1 dark:text-gray-300">Next.js</p>
            </div>
            <div className=" flex justify-center flex-col items-center shadow-lg p-10 rounded-xl py-10 flex-1 dark:bg-gray-800">
              <Image alt="teach" src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Mentor
              </h3>
              <p className="py-2 text-center dark:text-gray-300">
                {" "}
                I genuinely care about people, and love helping fellow designers
                work on their craft.
              </p>
              <h4 className="py-4 text-teal-600">Mentor Stats</h4>
              <p className="text-grey-800 py-1 dark:text-gray-300">
                2 years experience
              </p>
              <p className="text-grey-800 dark:text-gray-300 py-1">
                10+ students
              </p>
              <p className="text-grey-800 dark:text-gray-300 py-1">
                6 short courses
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center">
            <h3 className="text-3xl py-5 text-center dark:text-white">
              Portfolio
            </h3>
            <p className="dark:text-gray-300">
              Here are a few past design projects I have worked on. Want to see
              more?
            </p>
          </div>
          <div className="py-8 flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1">
              <Image
                alt="pic"
                src={web1}
                className="cursor-pointer p-5 rounded-lg object-cover rwidth={'100%'} height={'100%'}ound"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                alt="pic"
                src={web2}
                className="cursor-pointer p-5 rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                alt="pic"
                src={web3}
                className="cursor-pointer p-5 rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                alt="pic"
                src={web4}
                className="cursor-pointer p-5 rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                alt="pic"
                src={web5}
                className="cursor-pointer p-5 rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                alt="pic"
                src={web6}
                className="cursor-pointer p-5 rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </section>
        <footer className=" font-burtons bg-gradient-to-b from-teal-600 to-gray-900 text-gray-300 w-100 text-center p-5 rounded-xl dark:text-gray-300">
          <h3>Created with React js, Next js, Tailwind css</h3>
          <p>Copyright @PaulRichardevs</p>
        </footer>
      </main>
    </div>
  );
}
