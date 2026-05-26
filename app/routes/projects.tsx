import { redirect } from "@remix-run/node";

export const loader = async () => {
  return redirect("/blog");
};

export default function ProjectsRedirect() {
  return null;
}
