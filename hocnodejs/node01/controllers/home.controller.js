const homeController = {
  index: (req, res) => {
    //Nhận dữ liệu từ request
    //Validate
    //Thao tác với Model(Database)
    //Trả về response: view, redirect,json,...
    const title = ` <i>học back-end dễ hơn Fe</i>`;
    const status = 0;
    const users = ["User 1 ", "User 2", "User 3"];

    //Set session
    req.session.message = "Học lập trình không khó";
    req.session.count = 1;
    delete req.session.count; //Xóa session count
    res.render(`home/index`, { title, status, users });
  },

  showProducts: (req, res) => {
    //get session
    console.log(req.session.message);

    console.log(req.session.count);

    res.render(`home/products`, {
      layout: false,
    });
  },
};

export default homeController;

/*
Controller => Page hoặc tên module
Action: Hàm thể hiện 1 chức năng :
+ add 
+ edit
+ delete
+ lists

Ví dụ: 
- Controller sản phẩm => Danh từ
-Action: Thêm , sửa , xóa , hiển thị danh sách => Động từ

 */
