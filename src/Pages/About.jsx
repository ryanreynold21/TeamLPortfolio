import React from 'react'
import { CgFacebook } from 'react-icons/cg';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import about from '../images/about-us.jpg'
const About = () => {
  return (
    <section name="about">
      <div className="flex justify-center">
        {/* About Gp */}
        <div className="bg-slate-100 sm:w-[100%] w-[100%]  sm:h-[700px] px-8 py-10 ">
          <div className="text-2xl md:text-4xl tracking-tight uppercase font-semibold relative inline-block align-top z-10 mb-[10px] py-[10px] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#d9832e] after:w-[50px]">
            ABOUT ME
          </div>
          <p className="text-sm font-normal text-[#555a64] mt-5">
            A FRONTED DEVELOPER BASED IN MYANMAR
          </p>
          {/* img */}
          <div className="sm:flex flex-wrap ">
            <div className="px-4 sm:flex sm:w-[40%]   ">
              <div className=" relative bg-white  h-[400px] sm:h-[471px] sm:mt-14 mt-10 px-4  flex  items-center justify-center rounded">
                {/* relative group */}
                <div className="absolute top-9  left-1 sm:w-[13%] w-[15%] h-[190px] sm:h-[210px] bg-white flex flex-col justify-around ">
                  <div className="sm:w-9 w-7 ml-3 sm:h-[34px] h-[30px] hover:bg-black bg-[#D9832E] flex items-center justify-center text-white">
                    <CgFacebook />
                  </div>
                  <div className="sm:w-9 w-7 ml-3 sm:h-[34px] h-[30px] sm:ml-3 hover:bg-black bg-[#D9832E] flex items-center justify-center text-white">
                    <AiOutlineTwitter />
                  </div>
                  <div className="sm:w-9 w-7 ml-3 sm:h-[34px] h-[30px] sm:ml-3 hover:bg-black bg-[#D9832E] flex items-center justify-center text-white">
                    <AiOutlineInstagram />
                  </div>
                  <div className="sm:w-9 w-7 ml-3 sm:h-[34px] h-[30px] sm:ml-3 hover:bg-black bg-[#D9832E] flex items-center justify-center text-white">
                    <BiLogoLinkedin />
                  </div>
                </div>
                <img
                  src={about}
                  className="sm:w-[99%] sm:h-[444px] h-[370px]"
                />
              </div>
            </div>
            {/* Tony Smith */}
            <div className="sm:w-[60%] w-[100%]">
              <div className=" text-2xl md:text-3xl font-semibold sm:mt-20 mt-8 sm:px-14 px-4">
                I'M Tony Smith
              </div>
              <div className="flex sm:px-14 px-4  mt-4">
                <div className="text-1xl">A Lead</div>
                <div className="sm:ml-3 ml-2 text-[#d9832e] text-1xl">
                  FRONTED DEVELOPER
                </div>
                <div className="sm:ml-3 ml-2 text-1xl"> in</div>
                <div className="sm:ml-3 ml-2 text-[#d9832e] text-1xl">
                  Myanmar
                </div>
              </div>
              <div className="sm:w-[90%] sm:mx-14 px-4 sm:mt-8 mt-4 h-[112px] text-[#555a64]">
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores. My passion is to design digital user
                experiences through the bold interface and meaningful
                interactions. Check out my Portfolio
              </div>

              <div className="sm:flex flex-wrap">
                <div>
                  {/* birthday group */}
                  <div className="flex sm:px-14 px-4 sm:mt-5 mt-24">
                    <div className="w-[91px] text-sm font-semibold">
                      Birthday
                    </div>
                    <div className="w-[1px]  sm:ml-0 h-[20px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">
                      4th April 1991
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="flex sm:px-14 mt-2 px-4 ">
                    <div className="w-[91px] text-sm font-semibold">Age</div>
                    <div className="w-[1px]  h-[20px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">22 Yr</div>
                  </div>
                  {/*3  */}

                  <div className="flex sm:px-14 mt-2 px-4 ">
                    <div className="w-[91px] text-sm font-semibold">
                      Residence
                    </div>
                    <div className="w-[1px]  sm:ml-0 h-[20px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">
                      Canada
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="flex sm:px-14 mt-2 px-4 ">
                    <div className="w-[91px] text-sm font-semibold">
                      Address
                    </div>
                    <div className="w-[1px]  sm:ml-0  h-[20px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">
                      California, USA
                    </div>
                  </div>
                </div>

                {/* Email Group */}
                <div>
                  <div className="flex sm:px-14 sm:mt-5 mt-2 px-4">
                    <div className="w-[91px] text-sm font-semibold">E-mail</div>
                    <div className="w-[1px]  sm:ml-0 h-[18px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">
                      info@domain.com
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="flex sm:px-14  mt-2 px-4 ">
                    <div className="w-[91px] text-sm font-semibold">Phone</div>
                    <div className="w-[1px]  sm:ml-0 h-[18px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">
                      820-885-3321
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="flex sm:px-14 mt-2 px-4 ">
                    <div className="w-[91px] text-sm font-semibold">Skype</div>
                    <div className="w-[1px] h-[18px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">
                      skype.0404
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="flex sm:px-14 mt-2 px-4">
                    <div className="w-[91px] text-sm font-semibold">
                      Freelance
                    </div>
                    <div className="w-[1px] h-[18px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">
                      Available
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm font-bold bg-[#D9832E]  text-white sm:w-[22%] w-[40%] h-[47px] flex justify-center items-center mt-7 sm:mx-14 mx-4 hover:bg-black">
                DOWNLOAD CV
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* my skill Gp */}
      <div className="flex justify-center my-20">
        <div className="h-[390px] sm:w-[92%] w-[100%] ">
          <div className="text-black text-4xl font-bold px-4">MY SKILLS</div>
          <p className="text-sm font-normal text-[#555a64] px-4 mt-6">
            {" "}
            A FRONTED DEVELOPER BASED IN MYANMAR
          </p>

          <div className="sm:flex flex-wrap">
            {/* html group */}
            <div className="sm:w-[46%] mt-12 ">
              {/* html */}
              <div className="flex px-4">
                <div className="text-semibold">HTML5</div>
                <div className=" sm:mx-96 mx-[210px] text-sm">92%</div>
              </div>
              <div className="px-4 mt-2 flex">
                <div className="bg-[#D9832E] w-[87%] h-1"></div>
                <div className="bg-[#EEEEEE] h-1 w-[13%]"></div>
              </div>
              {/* WordPress */}
              <div className="flex px-4 mt-9">
                <div className="font-medium ">CSS</div>
                <div className=" sm:mx-72 mx-[160px] text-sm">75%</div>
              </div>
              <div className="px-4 mt-2 flex">
                <div className="bg-[#D9832E] w-[65%] h-1"></div>
                <div className="bg-[#EEEEEE] h-1 w-[35%]"></div>
              </div>
              {/* JAVASCRIPT */}
              <div className="flex px-4 mt-9">
                <div className="font-medium ">JAVASCRIPT</div>
                <div className="sm:mx-[300px] mx-[140px] text-sm">86%</div>
              </div>
              <div className="px-4 mt-2 flex">
                <div className="bg-[#D9832E] w-[79%] h-1"></div>
                <div className="bg-[#EEEEEE] h-1 w-[21%]"></div>
              </div>
              {/* rEACT */}
              <div className="flex px-4 mt-9">
                <div className="font-medium ">REACT</div>
                <div className="sm:mx-[352px] mx-[194px] text-sm">88%</div>
              </div>
              <div className="px-4 mt-2 flex">
                <div className="bg-[#D9832E] w-[82%] h-1"></div>
                <div className="bg-[#EEEEEE] h-1 w-[18%]"></div>
              </div>
            </div>

            {/* 80 column group */}
            <div className="sm:mx-9 sm:w-[46%] ">
              {/* first flex */}

              <div className="flex justify-center">
                <img
                  src="https://self-portfolio-six.vercel.app/assets/slide_menu-04a57b7b.gif"
                  className="w-[40%] "
                />
              </div>
              {/* second flex */}
              <div className="flex justify-evenly  ">
                {/* 1 */}
                <div className="bg-[#E0832E] font-semibold w-[30%] ">
                  <div className=" flex justify-center  ">1+</div>
                  <div className="sm:px-6">YEARS OF EXPERIENCES</div>
                </div>
                {/* 2 */}
                <div className="bg-[#E0832E] font-semibold w-[30%] ">
                  <div className=" flex justify-center  ">10+</div>
                  <div className="sm:px-6">PROJECTS COMPLETED</div>
                </div>
                {/* 3 */}
                <div className="bg-[#E0832E] font-semibold w-[30%] ">
                  <div className=" flex justify-center  ">100+</div>
                  <div className="sm:px-3">HAPPY USERS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
