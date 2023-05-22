import Link from "next/link";
import styles from "./page.module.css";

export default async function Index() {
  const catResponse = await fetch("https://cataas.com/cat", {
    cache: "no-store",
  });
  const cat = await catResponse.arrayBuffer();

  return (
    <>
      <p>this is my website</p>
      <Link href={"blog"}>Blog</Link>
      <br></br>
      <Link href={"meetup"}>Meet Me</Link>
      <br></br>
      <Link href={"work"}>View My Work</Link>
      <br></br>
      <div className={styles.box}>
        <img
          className={styles.catImage}
          src={
            `data:${catResponse.headers.get("content-type")};base64,` +
            Buffer.from(cat).toString("base64")
          }
        ></img>
      </div>
    </>
  );
}
