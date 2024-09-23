import Link from "next/link";
import { formatDate, getProjects } from "app/blog/utils";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

export function Projects() {
  let allBlogs = getProjects();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="25"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {post.metadata.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="30"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {post.metadata.summary}
                </CardItem>
                <CardItem translateZ="50" className="w-full mt-4">
                  <Link href={post.metadata.url || "/"}>
                  <Image
                    src="/projects/practiced.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                  </Link>
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={`/projects/${post.slug}`}
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Read the blog post →
                  </CardItem>
                  <Link href={post.metadata.url || "/"}>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Visit the site
                  </CardItem>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </>
        ))}
    </div>
  );
}
