import { BlogPosts } from "app/components/posts";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">{'>'} whoami</h1>
      <p className="mb-4">
        {`Hi, I'm Roshni! I study mathematics (specializing in computer science) at UCLA. I love learning and `}
        <Link href="/projects" className="text-neutral-700 dark:text-neutral-300 underline">
          {`building useful projects.`} 
        </Link>     
      </p>
      <p className="mb-4">
        I thrive in enviromnents where innovation and constant improvement are at the forefront. {`I also enjoy `}
        <a href="/origami" className="text-neutral-700 dark:text-neutral-300 underline">{`origami`}</a>, hiking,
        {` `}
        linux, playing flute,
        {` and `}
        <a href="/bookshelf" className="text-neutral-700 dark:text-neutral-300 underline">{`reading`}</a>.
      </p>     
      <div className="my-8">
        <BlogPosts limit={3} /> 
      </div>
      
      
    </section>
  );
}
