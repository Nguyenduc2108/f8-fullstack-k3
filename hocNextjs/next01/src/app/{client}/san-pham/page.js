// import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
export const metadata = {
  title: "Danh sách sản phẩm",
};

function Products({ searchParams }) {
  console.log(searchParams);
  return (
    <div>
      {/* <Title /> */}
      {/* <h2>Thông tin sản phẩm</h2> */}
      <h1>Danh sách sản phẩm</h1>
      <h2>Trạng thái: {searchParams.status}</h2>
      <h2>Từ khóa: {searchParams.keywords}</h2>
      <SearchForm />
    </div>
  );
}

export default Products;

//Server Component
