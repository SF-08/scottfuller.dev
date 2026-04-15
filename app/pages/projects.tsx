import MotionHoc from "./motionhoc";

const ProjectsComponent = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">Projects</h1>
        </div>
    );
};

const Projects = MotionHoc(ProjectsComponent);

export default Projects;