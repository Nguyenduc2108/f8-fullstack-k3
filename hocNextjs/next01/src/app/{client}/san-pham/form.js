"use client";
import { useRouter } from "next/navigation";
function Form() {
  const router = useRouter();
  return (
    <div>
      <form action="">
        <select name="status">
          <option value="all">Tất cả sản phẩm</option>
          <option value="active">Kích hoạt</option>
          <option value="inactive">Chưa kích hoạt</option>
        </select>
        <input type="search" name="keywords" placeholder="Từ khóa..." />
        <button>Tìm kiếm</button>
      </form>
    </div>
  );
}

export default Form;
