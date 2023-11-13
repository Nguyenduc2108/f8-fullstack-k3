//Higher Order Component --> Thay đổi màu chữ ngẫy nhiên
export const color = (ParentComponent) => {
  // Tạo 1 component mới
  const Component = (props) => {
    const color =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
    return (
      <div style={{ color }}>
        <ParentComponent {...props} />;
      </div>
    );
  };
  return Component;
};

//Gọi color(App)
/*
tạo ra 1 hàm nhận vào 1 component -> trả về 1 hàm con. Trong hàm con đó sẽ trả về component ban đầu

--> Ôn lại kiến thức closure
*/
