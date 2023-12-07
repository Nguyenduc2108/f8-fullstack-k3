import styles from "./post.module.scss";

export default function Post() {
  return (
    <div>
      <h2 className={styles.title}>Tin tuc</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
        laborum perspiciatis quaerat dolor laudantium veritatis, soluta, quos
        voluptatibus optio minima, corrupti dolore quidem officiis saepe
        similique dolorem ea amet tempore!
      </p>
    </div>
  );
}
