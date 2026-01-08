import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
    return(
        <section>
                <section className="flex items-center h-[90vh] pt-40 px-10">
                    <div>
                        <div className="max-w-4xl">
                            <h1 className="text-[5rem] ">Build a Resume That Gets You Hired</h1>
                            <p className="text-stone-400">Create professional, job-ready resumes in minutes. Our smart resume builder helps you highlight your skills, experience, and achievements with clean designs that recruiters love. No guesswork just results.</p>

                            <div className="py-10 flex gap-10">
                                <button className="px-4 py-2 bg-amber-900 text-xl rounded-sm flex items-center justify-center gap-2 group cursor-pointer">
                                    Start for free
                                    <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 duration-300"/>
                                </button>
                                <button className="px-4 py-2 border text-xl rounded-sm hover:bg-amber-900 duration-300 cursor-pointer">Try demo</button>

                            </div>
                        </div>
                    </div>
                </section>

                  <div className="flex items-center justify-center">
                        <div className="w-16 h-16 flex items-center animate-bounce justify-center border rounded-full">
                            <ArrowDown/>
                        </div>
                  </div>
        </section>
    )
}