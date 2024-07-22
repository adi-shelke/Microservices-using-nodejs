import CreatePost from "@/components/CreatePost";
import PostList from "@/components/PostList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-[4rem] pt-[2rem]">
      <div className="container">
        <h1 className="text-[24px] font-semibold">Create Post</h1>
        <CreatePost />
        <hr />
        <h1 className="text-[24px] font-semibold">Posts</h1>
        <PostList/>
      </div>
    </div>
  );
}
