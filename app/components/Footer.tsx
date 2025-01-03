import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="w-full] pt-8 pb-2">
      <div className="flex justify-between items-center text-neutral-700">
        <div>&copy; {new Date().getFullYear()} Mandy Hartman</div>
        <div className="flex items-center gap-3 text-neutral-700">
          <a href="https://github.com/hartmandy" className="h-5 w-5">
            <GitHubLogoIcon className="h-full w-full" />
          </a>
          <a href="https://twitter.com/codewithmandy" className="h-5 w-5">
            <TwitterLogoIcon className="h-full w-full" />
          </a>
          <a
            href="https://www.linkedin.com/in/codewithmandy/"
            className="h-5 w-5"
          >
            <LinkedInLogoIcon className="h-full w-full" />
          </a>
          <a href="mailto:mandy@virtu-studios.com" className="h-5 w-5">
            <EnvelopeClosedIcon className="h-full w-full" />
          </a>
        </div>
      </div>
    </footer>
  );
}
