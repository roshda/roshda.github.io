import { getBlogPosts } from "../blog/getBlogPosts";
import SearchClient from "./SearchClient"; 

export default function SearchPage() {
  const posts = getBlogPosts();

  return <SearchClient blogPosts={posts} />;
}
