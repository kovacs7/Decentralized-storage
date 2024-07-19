import { useContext } from "react";
import { Web3Context } from "../contexts/Web3Provider";
import { connectWallet } from "../utils/connectWallet";
import { Player } from "@lottiefiles/react-lottie-player";
import Button1 from "../components/Button1";
import landingAnimation from "../assets/Landing.json";
import arrow from "../assets/arrow-green.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import youtube from "../assets/youtube.svg";

const Landing = () => {
  const web3State = useContext(Web3Context);
  web3State
  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="mt-[3%] flex justify-center">
          <p className="mb-2 text-2xl font-extrabold text-black md:text-3xl">
            Hi, I&apos;m <br className="block md:hidden" />
            <span className="relative">
              <span className="text-brand-accent h-20 overflow-x-hidden whitespace-nowrap pt-2 font-extrabold text-green-600">
                Asish <span className="text-2xl md:text-4xl">👋</span>
              </span>
              <span className="{`${styles.cursor} will-change`} absolute -bottom-0 -top-1 left-0 inline-block w-full animate-type bg-white"></span>
            </span>
          </p>
        </div>
        <p className="text-md px-[5%] text-center md:text-lg">
          I developed this project to offer users a secure alternative for data
          storage, diverging from existing market options. This blockchain-based
          project ensures secure data storage, offering peace of mind without
          compromise.
        </p>

        <Button1
          text={`Get Started`}
          textSize="text-sm md:text-md"
          icon={<img src={arrow} className="h-[25px] w-[25px]"></img>}
          onClick={connectWallet}
        />
        {/* animation-tablet-mobile */}
        <div className="block lg:hidden">
          <Player
            autoplay
            loop
            src={landingAnimation}
            style={{ height: "95%", width: "95%", marginTop: "32px" }}
          ></Player>
        </div>
        {/* animation-web */}
        <div className="hidden lg:block">
          <Player
            autoplay
            loop
            src={landingAnimation}
            style={{ height: "30%", width: "30%", marginTop: "32px" }}
          ></Player>
        </div>
      </div>
      {/* socials */}
      <div className="mb-[3%] mr-[3%] self-end">
        <div className="flex flex-row items-center gap-2">
          <a href="">
            <img src={linkedin} alt="linkdein" className="h-6 w-6" />
          </a>
          <a href="">
            <img src={github} alt="github" className="h-6 w-6" />
          </a>
          <a href="">
            <img src={youtube} alt="youtube" className="h-6 w-6" />
          </a>
          <p className="text-[15px]">{"@kovacs7"}</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
