import Image from "next/image";
import governorKamran from "/public/governorKamran.png"
import image1 from "/public/image1.jpg"
import image2 from "/public/image2.jpg"
import image3 from "/public/image3.jpg"
import governorpic from "/public/governorpic.jpg"
import image4 from "/public/image4.jpg"
import image5 from "/public/image5.jpg"
import image6 from "/public/image6.jpg"
import image7 from "/public/image7.jpg"
import image8 from "/public/image8.jpg"
import image9 from "/public/image9.jpg"
import image10 from "/public/image10.jpg"
import image11 from "/public/image11.jpg"
import image12 from "/public/image12.jpg"


export default function Home() {
  return (
    <>
    <div className="(Main Content page) flex bg-cover overflow-hidden relative bg-opacity-10 z-0" style={{backgroundImage: "url('/bg.jpg')"}}>

      {/* for bg-image */}
      <div className=" absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80"></div>

      
      <div className="(Left-Section) w-[70%] mt-16 ml-20">

      <h1 className="font-extrabold text-6xl text-[#214982]">
          Governor Sindh
          </h1>

          <h1 className="text-5xl font-normal text-[#255291]  mt-1">
          Kamran Khan Tessori
          </h1>

          <h1 className="font-extrabold leading-[2.7rem] text-4xl mt-5 text-[#3fa5ee] tracking-wider ">
          Certified Cloud
          <br />
          Applied Generative AI
          <br />
          Engineer (GenEng)
          </h1>

          <p className="font-extrabold my-5 text-[1.40rem] text-[#214982] text-2xl">
          Earn up to $5,000 / month
          </p>

          <p className="font-extrabold my-5 text-[1.40rem] text-[#214982] text-2xl tracking-wider">
          Now admissions are open 
          <br />
           in Hyderabad
          </p>

          <div className="flex">
          <a href="/apply">
              <button className="w-full rounded-md bg-[#214982] py-3 text-center text-sm text-white font-semibold tracking-widest transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52 mt-5">APPLY NOW</button>
            </a>

            <div className="mt-4 ml-20">
            <p className="font-extrabold  text-2xl text-[#214982]">562,143</p> 
            <p className="text-center text-sm font-light tracking-wider text-[#407acc] mt-1">
            Accepted Applications</p>
            </div>

          </div>

      </div>

      <div className="(Right-Section) justify-end w-[100%]">
        <Image className="" src={governorKamran} alt=""/>
      </div>

    </div>

    
    <div className="(Content) xl:w-[1300px] lg:w-[90%] w-[95%] m-auto sm:mt-20 mt-10 border-b border-zinc-300 pb-10">

      <h1 className="text-center xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] text-main font-bold text-[#214982]">
      Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
      </h1>

      <p className="text-xl mt-10 tracking-wider">
      The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
      </p>
      
      <div className="(images grid sm:grid-cols-3 grid-cols-1 gap-5 mt-10 m-3 )">

        <Image className=" shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full" src={image1} alt=""/>

        <Image className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full" src={image2} alt=""/>

        <Image className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full" src={image3} alt=""/>

      </div>

      <div className="mt-10">

        <div>
          <Image src={governorpic} alt=""/>
        </div>

        <hr className="mt-20 font-bold"/>

        <div>
          <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10 text-[#214982]">
          Core Courses Sequence
          </h1>

          <div className="(images grid sm:grid-cols-3 grid-cols-1 gap-5 mt-10 m-3 )">

            <Image className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold " src={image4} alt=""/>

            <Image className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold " src={image5} alt=""/>

            <Image className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold " src={image6} alt=""/>

          </div>
        </div>

        <div className="mt-20">

          <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10 text-[#214982]">
          Advanced Courses
          </h1>

        </div>

        <div className="(images grid sm:grid-cols-4 grid-cols-1 gap-5 mt-10 m-3 )">

          <Image className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold " src={image7} alt=""/>

          <Image className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold " src={image8} alt=""/>

          <Image className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold " src={image9} alt=""/>

          <Image className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold " src={image10} alt=""/>

          <Image className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold " src={image11} alt=""/>

          <Image className=" overflow-hidden h-fit  box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold " src={image12} alt=""/>


        </div>



      </div>











    </div>

    </>  
  );
}
