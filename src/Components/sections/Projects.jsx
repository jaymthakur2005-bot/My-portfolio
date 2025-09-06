import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
    return (
      <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent 
                           text-center">
            Featured Projects
           </h2>
           
           {/* Main DIV  to add projects */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                           hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2"> E-commerce Platform </h3> 
                <p className="text-gray-400 mb-4">
                    E-commerce platform is a digital marketplace that enables businesses and individuals to buy and sell 
                    products or services online. It provides tools for managing storefronts, payments, shipping, and customer 
                    interactions seamlessly.
                </p>
                 <div className="flex flex-wrap gap2 mb-4">
                    {["React", "Node.js", "MongoDB", "Express.js"].map((tech,key) => (
                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            {tech}
                        </span>
                    ))}
                 </div>
                 <div className="flex justify-between items-center">
                   <a href="#" className=" text-blue-400 hover:text-bule-300 transition-colors my-4"> 
                    View Project ➜
                    </a>
                 </div>
            </div>

            <div 
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                           hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2"> Fitness and Calories Tracking Web App </h3> 
                <p className="text-gray-400 mb-4">
                    Fitness and calories tracking platform helps users monitor workouts, daily activity, and calorie intake 
                    to achieve health goals. It provides insights, progress tracking, and personalized recommendations for better
                    fitness management.
                </p>
                 <div>
                    {["React", "Node.js", "MongoDB", "Express.js"].map((tech,key) => (
                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            {tech}
                        </span>
                    ))}
                 </div>
                 <div className="flex justify-between items-center">
                   <a href="#" className=" text-blue-400 hover:text-bule-300 transition-colors my-4"> 
                    View Project ➜
                    </a>
                 </div>
            </div>

            <div 
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                           hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2"> Travel Planner Platfrom </h3> 
                <p className="text-gray-400 mb-4">
                    E-commerce platform is a digital marketplace that enables businesses and individuals to buy and sell 
                    products or services online. It provides tools for managing storefronts, payments, shipping, and customer 
                    interactions seamlessly.
                </p>
                 <div>
                    {["React", "Node.js", "MongoDB", "Express.js"].map((tech,key) => (
                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            {tech}
                        </span>
                    ))}
                 </div>
                 <div className="flex justify-between items-center">
                   <a href="#" className=" text-blue-400 hover:text-bule-300 transition-colors my-4"> 
                    View Project ➜
                    </a>
                 </div>
            </div>

            <div 
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                           hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2"> E-commerce Platform </h3> 
                <p className="text-gray-400 mb-4">
                    E-commerce platform is a digital marketplace that enables businesses and individuals to buy and sell 
                    products or services online. It provides tools for managing storefronts, payments, shipping, and customer 
                    interactions seamlessly.
                </p>
                 <div>
                    {["React", "Node.js", "MongoDB", "Express.js"].map((tech,key) => (
                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            {tech}
                        </span>
                    ))}
                 </div>
                 <div className="flex justify-between items-center">
                   <a href="#" className=" text-blue-400 hover:text-bule-300 transition-colors my-4"> 
                    View Project ➜
                    </a>
                 </div>
            </div>

           </div>

           
               
          </div>
          </RevealOnScroll>
     </section>
    )
};

export default Projects;