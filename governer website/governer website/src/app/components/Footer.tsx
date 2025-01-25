import Link from "next/link";

export default function Footer(){
    return(
        <div className="mt-20 w-full bg-zinc-100">

            <div className="(Footer content) m-auto w-[95%] py-20 lg:w-[90%] xl:w-[1300px] grid grid-cols-1 gap-10 md:grid-cols-3">

                <div>

                        <div className="">

                          <h1 className="font-bold text-xl">Core Courses</h1>

                        </div>

                    <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
                        <p>Programming Fundamentals</p>
                        <p>Web2 Using NextJS</p>
                        <p>Earn as You Learn</p>
                    </div>


                </div>


                <div>
                    <h1 className="text-xl font-bold">Advanced Courses</h1>

                    <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
                      <p>Web 3 and Metaverse</p>
                      <p>Cloud-Native Computing</p>
                      <p>Artificial Intelligence (AI) and Deep Learning</p>
                      <p>Ambient Computing and IoT</p>
                      <p>Genomics and Bioinformatics</p>
                      <p>Network Programmability and Automation
                      </p>
                    </div>

                </div>


                <div>
                    <h1 className="text-xl font-bold">Social Links
                    </h1>
                </div>

            </div>


        </div>
    )
}