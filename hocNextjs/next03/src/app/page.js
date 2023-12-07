// import Demo from "./components/Demo";
// import Demo2 from "./components/Demo2";
import Products from "./components/Products/Products";
import Post from "./components/Posts/Post";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <Products />
      <Post />
      {/* <Demo>
        <Demo2 />
      </Demo> */}
      <Image src="/next.svg" width="300" height="200" alt="Next" />
    </div>
  );
}
