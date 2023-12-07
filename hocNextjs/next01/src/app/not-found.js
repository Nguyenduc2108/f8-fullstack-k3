import Link from "next/link";
import Image from "next/image";
import notFoundImage from "@/assets/images/404.png";

function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <h2>Vui lòng quay lại trang chủ</h2>
      <Image
        src={notFoundImage}
        alt="404 not found"
        style={{ maxWidth: "100%", height: "auto" }}
      ></Image>
      <Link href={"/"}>Về trang chủ</Link>
    </div>
  );
}

export default NotFound;
