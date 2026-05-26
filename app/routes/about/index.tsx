import SkillsChip from "~/components/SkillChips";
import { skills } from "./lists";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export default function About() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        {/* Professional Summary */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-700 pb-4">Summary</h2>
          <p className="text-neutral-700 leading-relaxed text-xl">
            Software developer focused on creating accessible, user-friendly web
            applications with React and Remix. Passionate about building
            interfaces that work well for everyone.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/hartmandy"
              className="h-6 w-6 text-neutral-700 hover:text-black transition-colors"
            >
              <GitHubLogoIcon className="h-full w-full" />
            </a>
            <a
              href="https://www.linkedin.com/in/hartmandy/"
              className="h-6 w-6 text-neutral-700 hover:text-black transition-colors"
            >
              <LinkedInLogoIcon className="h-full w-full" />
            </a>
            <a
              href="mailto:mandyhartmandev@gmail.com"
              className="h-6 w-6 text-neutral-700 hover:text-black transition-colors"
            >
              <EnvelopeClosedIcon className="h-full w-full" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t border-neutral-700 my-8" />

      <div>
        <h3 className="text-2xl font-bold text-neutral-700 pb-4">Skills</h3>
        <SkillsChip skills={skills} />
      </div>

      <hr className="border-t border-neutral-700 my-8" />

      <div className="rounded-lg border border-neutral-700 p-5 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-600">
          Resume
        </p>
        <h3 className="mt-4 text-2xl font-bold text-neutral-800">
          Want to work together?
        </h3>
        <p className="mt-3 text-lg font-normal leading-relaxed">
          If you want to work with me, contact me at{" "}
          <a
            href="mailto:mandyhartmandev@gmail.com"
            className="underline hover:font-bold"
          >
            mandyhartmandev@gmail.com
          </a>
          . You can also view my resume as a PDF or download a copy.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-neutral-700 px-4 py-2 text-sm font-bold hover:bg-neutral-700 hover:text-white"
          >
            View Resume PDF
          </a>
          <a
            href="/resume.pdf"
            download
            className="rounded-lg border border-neutral-700 px-4 py-2 text-sm font-bold hover:bg-neutral-700 hover:text-white"
          >
            Download Resume
          </a>
        </div>
      </div>

      <hr className="border-t border-neutral-700 my-8" />

      {/*
      <div>
        <h3 className="text-2xl font-bold text-neutral-700 pb-4">Experience</h3>
        {jobs.map((job, index) => (
          <div key={index} className="mb-8 max-w-3xl">
            <p className="font-semibold text-xs">{job.dates}</p>
            <h3 className="text-lg md:text-2xl xl:text-3xl font-light mb-4">
              {job.title}
            </h3>
            <p className="text-md md:text-lg">{job.blurb}</p>
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
        <h3 className="text-lg md:text-2xl xl:text-3xl font-bold text-neutral-700 pb-4">
          Education & Lifelong Learning
        </h3>
        <div className="mb-6">
          <h4 className="text-lg md:text-2xl xl:text-3xl font-light pb-4">
            Formal Education
          </h4>
          <ul className="list-disc pl-5">
            {education.map((edu, index) => (
              <li key={index} className="mb-2">
                <p className="font-bold text-xl">{edu.degree} </p>
                <p className="font-normal text-lg">
                  {edu.institution}, {edu.year}
                </p>
              </li>
            ))}
          </ul>
        </div>

        Bootcamps and Workshops
        <div>
          <h4 className="text-lg md:text-2xl xl:text-3xl font-light pb-4">
            Continuing Education, Bootcamps, & Workshops
          </h4>
          <ul className="list-disc pl-5">
            {bootcamps.map((bootcamp, index) => (
              <li key={index} className="mb-2">
                <p className="font-semibold text-xl">{bootcamp.name}</p>
                <p className="font-normal text-lg">
                  {bootcamp.institution}, {bootcamp.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-t border-neutral-700 my-8" />
      */}
    </>
  );
}
