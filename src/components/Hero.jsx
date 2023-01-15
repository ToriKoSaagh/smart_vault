import React from 'react';
import { vault } from '../assets';
import styles from '../style';
import SignUp from './SignUp';

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
         <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                  The Next<br className='sm:block hidden'/> {" "}
                  <span className="text-gradient">Generation</span>
                </h1>
                <div className="ss:flex hidden md:mr-4 mr-0">
                  <SignUp />
                </div>
              </div>
              <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
                  Home Security.
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
                Introducing the Smarty Vault, the ultimate storage solution for all your bling-bling and other fancy schmancy things!
                Our team of genius inventors, who may or may not have been inspired by too much Netflix and chill, have created a high-tech gadget that will keep your valuables safer than a llama in a locked cage.
                </p>
          </div>

          <div className={`flex-1 flex ${styles.flexCenter} md:my-10 relative`}>
              <img src={vault} alt="vault" className="w-[100%] h-[100%] relative z-[5]"/>
              <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
              <div className="absolute z-[1] w-[80%] rounded-full bottom-40 white__gradient"/>
              <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
          </div>

          <div className={`ss:hidden ${styles.flexCenter}`}>
              <SignUp/>
          </div>
          
    </section>
)

export default Hero