import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import shivaniImage from "../assets/shivani.jpg"; // Import your photo
import { SectionWrapper } from "../hoc";
import Resume from './Shivani 2024 Resume.pdf';


const Hero = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const phrases = [
      "",
      "Frontend Developer",
      "Web Developer",
      "Proud Indian."
    ];

    let currentIndex = 0;
    let currentText = "";

    const intervalId = setInterval(() => {
      const phrase = phrases[currentIndex];
      if (currentText.length < phrase.length) {
        currentText += phrase[currentText.length];
        setText(currentText);
      } else {
        currentIndex = (currentIndex + 1) % phrases.length;
        currentText = "";
      }
    }, 150); // Adjust the interval for speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Shivani Tak</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a <span className="text-red-500">Software Developer Engineer</span> <br className='sm:block hidden' />
            I am a <span className="text-green-500">{text}</span>
          </p>
          <a href={Resume} download>
          <button style={{  
            position: "relative",
  backgroundColor: "#915EFF",
  marginTop:"150px",
  border: "none",
  fontSize: "20px",
  color: "#FFFFFF",
  borderRadius: "4px",
  padding: "10px",
  width: "200px",
  textAlign: "center",
  transitionDuration: "0.4s",
  textDecoration: "none",
  overflow: "hidden",
  cursor: "pointer"}}>Download CV</button>
        </a>
        </div>
      </div>

      {/* Image remains static */}
      <div className='absolute top-[120px] right-[50px] rounded-full overflow-hidden border-4 border-white'>
        <img src={shivaniImage} alt="Shivani Tak" className="w-96 h-96 rounded-full" />
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

//export default Hero;
export default SectionWrapper(Hero, "home");