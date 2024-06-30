import React from "react";
import { techStackDetails } from "../Details";
import './style.css';

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    tailwind,
    bootstrap,
    sass,
    vscode,
    github,
    npm,
    cpp,
    c,
    java,
    python,
    php,
    mysql,
    Metasploit,
    namp,
    wireshark,
    aws,

  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        
        <img className="tect-img" src={cpp} title="cpp" alt="CPP" />
        <img className="tect-img" src={c} title="c" alt="C" />
        <img className="tect-img" src={python} title="Python" alt="Python" />
        <img className="tect-img" src={java} title="java" alt="Java" />
        <img className="tect-img" src={aws} title="aws" alt="AWS" />
        <img className="tect-img" src={php} title="php" alt="PHP" />
        <img className="tect-img" src={mysql} title="mysql" alt="MYSQL" />
        <img className="tect-img" src={html} title="html" alt="" />
        <img className="tect-img" src={css} title="CSS" alt="" />
        <img className="tect-img" src={js} title="JavaScript" alt="" />
        <img className="tect-img" src={react} title="React" alt="" />
        <img className="tect-img" src={tailwind} title="Tailwind CSS" alt="" />
        <img className="tect-img" src={bootstrap} title="Bootstrap" alt="" />
        <img className="tect-img" src={sass} title="SASS" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img className="tech-img" src={vscode} title="Visual Studio Code" alt="" />
        <img className="tech-img" src={github} title="Github" alt="Github" />
        <img className="tech-img" src={npm} title="NPM" alt="NPM" />
        <img className="tech-img" src={Metasploit} title="Metasploit" alt="Metasploit" />
        <img className="tech-img" src={namp} title="nmap" alt="Nmap" />
        <img className="tech-img" src={wireshark} title="wireshark" alt="wireshark" />
      </section>
    </main>
  );
}

export default Technologies;
