import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <diV className="border-b border-neutral-800 pb-4">
      <h1 className="text-center text-4xl my-20">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={200}
                height={200}
                className="rounded mb-6"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => (
                    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </diV>
  );
};

export default Project;
