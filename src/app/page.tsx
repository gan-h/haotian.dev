import Link from "next/link";

export default function Index() {
  return (
    <>
      <p>this is my website</p>
      <Link href={"blog"}>Blog</Link>
      <br></br>
      <Link href={"meetup"}>Meet Me</Link>
      <br></br>
      <Link href={"work"}>View My Work</Link>
    </>
  );
}
