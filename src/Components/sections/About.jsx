import RevealOnScroll from "../RevealOnScroll";


const About = () => {

    const frontendSkills = ["React", "Html", "Tailwindcss", "Javascript"];

    const backendSkill = ["Node.js", "MongoDB", "Express.js"]

    return(
      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent 
                           text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Passinate developer with experties in building scalable web applications
                    and crafting innovative solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                       <h3 className="text-xl font-bold mb-4">
                        Frontend
                          <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span 
                                     key={key}
                                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                  {tech}
                                </span>
                            ))}
                          </div>
                       </h3>
                    </div>


                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                       <h3 className="text-xl font-bold mb-4">
                        Backend
                          <div className="flex flex-wrap gap-2">
                            {backendSkill.map((tech, key) => (
                                <span 
                                     key={key}
                                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                  {tech}
                                </span>
                            ))}
                          </div>
                       </h3>
                    </div>
                </div>


            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                   <h3 className="text-xl font-bold mb-4">🎓Education</h3>
                   <ul className="list-disc list-inside text-gray-300 space-y-2">
                     <li>
                      <strong>Diploma In Computer Technology</strong> - Goverment Polytechnic Pen (2021-2024)
                     </li>
                     <li>
                       <strong>Relative CouseWork:-</strong> Data Structures, Web Development 
                     </li>
                   </ul>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                   <h3 className="text-xl font-bold mb-4">👨🏻‍💻Work Experience </h3>
                   <div className="space-y-4 text-gray-300">
                     <div>
                      <h4 className="font-semibold"> Intern at Benchmark education startups(2023).</h4>
                      <p>
                        Assisted in building front-end components and integrating REST API's.
                      </p>
                     </div>
                   </div>
                </div>

            </div>

        </div>
        </RevealOnScroll>
      </section>
    )
};

export default About;