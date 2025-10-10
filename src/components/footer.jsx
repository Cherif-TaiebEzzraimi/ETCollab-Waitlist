export default function Footer(){
    return(
        <>
        <div id="contact" className="mt-52  bg-gradient-to-r  from-[#03BFB5] from-10% to-[#9305F2] to-60% w-full">
             {/*Left or Bottom Part */}
             <div className=" flex flex-col-reverse sm:flex-row    w-full" >
                <div className="mt-8 w-full px-38 sm:px-40 sm:mt-0 sm:py-8 sm:w-1/2 flex  flex-col items-center sm:block  ">
                     <img src="/Footer/etccollab.png" className="  sm:ml-0 w-24 sm:w-auto sm:max-w-[14rem] lg:w-52 "></img> 
                    <div className="flex pt-2 sm:pt-6 gap-2 items-center">
                    <img src="/Footer/mail.png" className=" h-4 sm:h-6" />
                    <p className="text-white sm:text-sm">etcollab@ensia.edu.dz</p>
                </div>
                <div className="flex pt-2  sm:ml-0 sm:py-6 gap-2 sm:gap-6 items-center">
                    <img src="/Footer/insta.png"  className="w-12 sm:w-16" />
                    <img src="/Footer/linkedin.png" className=" w-6 sm:w-10 sm:h-10" />
                    <img src="/Footer/discord.png" className="w-8 ml-2 sm:ml-0 sm:w-12" />
                    
                </div>
                
            </div>
            {/*right or Top part */}
            <div className="text-white w-full pl-8 sm:pl-20 sm:pt-10  sm:w-1/2">
                <img src="/Footer/aboutus.svg" className="mt-2 mb-6 sm:mt-0 sm:w-40 "/>
                <p className="tracking-wider font-semibold sm:tracking-widest text-sm  sm:text-xs lg:text-sm font-[Montserrat] sm:mr-24 text-gray-200"><span className="font-bold text-white">ETCollab </span> is a web platform that brings <br/> together students, mentors, and sponsors <br/>to transform ideas into real projects. It <br/>provides tools to propose, join, and manage <br/> work across skills such as design, <br/> development, AI, and marketing. Members <br/> gain hands-on experience, grow their portfolios, and deliver meaningful solutions <br/> for the ETC community and beyond.</p>

            </div>
            
            
        </div>
        <div className="w-full ">
                <p className="text-white text-center pb-2">security policy</p>
        </div>
      </div>  
    </>
    )
}
