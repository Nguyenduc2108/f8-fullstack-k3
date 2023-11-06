Functional Component

- Component được tạo bằng Function
- khi re-render -> Chạy lại hàm component( chạy lại hết)
- không có sẵn các thành phần của React: state , lifecycle,... -> khắc phục bằng cachs sử dụng Hook(Hàm đặc biệt)

Hook là gì ?

- Hàm đặc biệt do React build sẵn hoặc do nhà phá triển tự xây dựng
- Bắt đầu bawgnf từ kháo use (useState , useContext,...)
- Chỉ được gọi hook ở trong functional component ( không thể gọi ở class , event handler, hoặc bất kỳ 1 hàm con nào khác trong function)

  1.useState() -> làm việc với State trong functional

trả về 1 mảng

- phần tử 1: giá trị state
- phần tử 2: function setState

2. useEffect() -> Mô phỏng lại vòng đời component trong Functional Component
   useEffect(callback, dependencies)

   1. khi state thay đổi

   2.UI Update

   3.Cleanup

   4. Chạy callback trong useEffect

   5. useReducer() -> Quản lý state bằng reducer

- Đẩy logic vào trong hàm reducer
- Event Handler -> Dispatch lên reducer

```js
const reducer = (prevState, newState) => {
  return newState;
};

const initialState = {};

const [state, dispatch] = useReducer(reducer, initialState);

const eventHandler = () => {
  dispatch();
};
```
