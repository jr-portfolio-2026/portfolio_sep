import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectPage } from "@/components/projects/ProjectPage";
import { getProject, PROJECTS, type ProjectSlug } from "@/lib/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    if (!PROJECTS.some((project) => project.slug === params.slug)) throw notFound();
    return getProject(params.slug as ProjectSlug);
  },
  head: ({ loaderData, params }) => {
    const project = loaderData ?? getProject(params.slug as ProjectSlug);
    const title = `${project.name} — Project Study · Jade Rakoto`;
    const description = `${project.mandate} Explore specifications, wireframes, and a controlled demonstration.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  component: ProjectRoute,
});

function ProjectRoute() {
  const project = Route.useLoaderData();
  return <ProjectPage project={project} />;
}
