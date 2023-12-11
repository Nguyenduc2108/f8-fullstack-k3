import Info from "../infomation/Info";
import "./main.scss";

export default function Main({ lang }) {
  return (
    <div className="container-main">
      <div className="title">
        <p>Fullstack.edu.vn F8</p>
      </div>
      <main style={{ display: "flex", gap: "30px" }}>
        <Info lang={lang} />
      </main>
    </div>
  );
}
