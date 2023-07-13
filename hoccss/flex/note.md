# Flex = Flexible Box Module

## Các thuộc tính trong nhóm Flex Container

1. display : flex | inline-flex -> Kích hoạt flex

2. flex-direction: Chọn hướng cho trục chính (main axis)

- row -> Mặc định
- row-reverse
- column
- column-reverse

  3.justify-content: Căn chỉnh các Item theo hướng song song với trục chính(main)

- flex-start
- flex-end
- center
- space-around
- space-evenly
- sapce-between

4. align-items: Căn chỉnh các Item theo hướng vuông góc với trục chính(cross
   axis)

- stretch : Mặc định, full chiều cao theo container 0
- flex-start
- center
- flex-end
- baseline

5. flex-wrap:

- no-wrap
- wrap
- wrap-reverse

6. align-content: Căn chỉnh hàng cột theo hướng vuông góc với trục chính

- stretch
- flex-start
- flex-end
- center
- space-around
- space-evenly
- sapce-between

7. gap

- row-gap
- column-gap

## Các thuộc tính trong nhóm Flex Item

1.flex-grow: Dãn đều các Item ( số nguyên)
-> Số nguyên : 0 - không dãn | 1 - dãn đều

2.flex-shirk:

- flex-shirk: 0 tự động dãn ra
- flex-shirk: 1 tự động co lại

  3.flex-basics:

- Bị chặn bởi min-width và max-width nếu flex-direction là row
- Bị chặn bởi min-height và max-height nếu flex-direction là column

4. flex : flex-grow | flex-shirk | flex-basics
