-- 1.Thêm trường description 
ALTER TABLE courses
ADD COLUMN description TEXT NULL;

-- 2. Đổi tên trường detail thành content và ràng buộc chuyển thành NOT NULL
ALTER TABLE courses
RENAME COLUMN detail TO content;

ALTER TABLE courses
ALTER COLUMN content SET NOT NULL;

-- 3.Thêm 3 giảng viên vào bảng teacher
INSERT INTO teacher (name,bio) VALUES 
('Giang vien 1', 'bio 1'),
('Giang vien 2', 'bio 2'),
('Giang vien 3', 'bio 3');

-- 4.Thêm 3 khóa học cho mỗi giảng viên
INSERT INTO courses (name,price,description,content,teacher_id,active) VALUES
('day hat',1000000,'Desc 1','Content 1',1,1),
('day cach di ngu',1200000,'Desc 2','Content 2',1,1),
('day lap trinh',1500000,'Desc 3','Content 3',1,1),
('day cach di choi',2000000,'Desc 4','Content 4',2,1),
('day cach thuc day',2200000,'Desc 5','Content 5',2,1),
('day boi',2500000,'Desc 6','Content 6',2,1),
('day di bang 2 chan',3000000,'Desc 7','Content 7',3,1),
('day nhu khong day',35000000,'Desc 8','Content 8',3,1),
('khong day',100000000,'Desc 9','Content 9',3,1);

-- 5.Sửa tên và giá từng khóa học thành tên mới và giá mới (Tên khóa học, giá khóa học các khóa học không được giống nhau)
UPDATE courses
SET name = 'hoc HTML CSS', price = 1250000
WHERE id =1

--6. Sửa lại bio của từng giảng viên
UPDATE teacher
SET bio = 'Bio 10' 
WHERE id = 1

-- Hiển thị danh sách giảng viên
SELECT * FROM teacher;

-- Hiển thị danh sách khóa học
SELECT * FROM courses;