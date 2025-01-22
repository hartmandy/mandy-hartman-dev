import SkillsChip from "~/components/SkillChips";
import profileImage from "./about.jpg";
import { jobs, skills, bootcamps, education } from "./lists";

export default function Projects() {
  return (
    <>
      <h1 className="text-7xl mt-11 mb-8 pb-8 border-b border-neutral-700">
        About
      </h1>

      <div className="md:grid md:grid-cols-2 gap-4">
        <div>
          <img
            src={profileImage}
            alt="Mandy Hartman"
            className="w-full md:w-2/3 grayscale hover:grayscale-0"
          />
        </div>
        <div>
          <p className="text-xl md:text-2xl xl:text-3xl font-light py-4 md:pt-8">
            I am a versatile Software Engineer with expertise in React and
            Remix, dedicated to developing intuitive and impactful web
            applications.
          </p>
          <p className="text-xl md:text-2xl xl:text-3xl font-light py-4 md:pt-8">
            My approach to software development emphasizes detail, user
            engagement, and accessibility. I craft solutions that are
            technically robust and enhance the overall user experience, driven
            by a passion for innovation and continuous learning in the tech
            industry.
          </p>
        </div>
      </div>

      <hr className="border-t border-neutral-700 my-8" />

      <div>
        <h3 className="text-2xl font-bold text-neutral-700 pb-4">Skills</h3>
        <SkillsChip skills={skills} />
      </div>

      <hr className="border-t border-neutral-700 my-8" />

      <div>
        <h3 className="text-2xl font-bold text-neutral-700 pb-4">Experience</h3>
        {jobs.map((job, index) => (
          <div key={index} className="mb-8 max-w-2xl">
            <p className="font-semibold text-xs">{job.dates}</p>
            <h3 className="text-lg md:text-xl xl:text-2xl font-light mb-4">
              {job.title}
            </h3>
            <p className="text-md">{job.blurb}</p>
            <ul className="list-disc pl-5">
              {job.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="border-t border-neutral-700 my-8" />

      <div className="max-w-2xl">
        <h3 className="text-2xl font-bold text-neutral-700 pb-4">
          Education & Lifelong Learning
        </h3>
        <div className="mb-6">
          <h4 className="text-lg md:text-xl xl:text-2xl font-light pb-4">
            Formal Education
          </h4>
          <ul className="list-disc pl-5">
            {education.map((edu, index) => (
              <li key={index} className="mb-2">
                <p className="font-bold">{edu.degree} </p>
                <p className="font-normal">
                  {edu.institution}, {edu.year}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Bootcamps and Workshops */}
        <div>
          <h4 className="text-lg md:text-xl xl:text-2xl font-light pb-4">
            Continuing Education, Bootcamps, & Workshops
          </h4>
          <ul className="list-disc pl-5">
            {bootcamps.map((bootcamp, index) => (
              <li key={index} className="mb-2">
                <p className="font-semibold">{bootcamp.name}</p>
                <p className="font-normal">
                  {bootcamp.institution}, {bootcamp.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-t border-neutral-700 my-8" />
    </>
  );
}
