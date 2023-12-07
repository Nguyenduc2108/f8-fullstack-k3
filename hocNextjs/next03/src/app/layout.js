import "@/assets/style.scss";
export const metadata = {
  title: "F8 - học lập trình để đi làm",
  description: "F8 chuyên lập trình web",
  robots: "follow,index",
  openGraph: {
    title: "F8 - học lập trình để đi làm",
    description: "F8 chuyên lập trình web 01",
    images: ["https://fullstack.edu.vn/images/image01.jpg"],
    url: "https://fullstack.edu.vn",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}

/*
SEO: Tối ưu hóa bộ máy tìm kiếm 
- Semantic HTML 
- Metadata:
  +) title
  +) meta description
  +) opengraph
    + meta title
    + meta description
    + image

  +) File-base metadata
    + favicon.ico
    + robot.txt --> Cho phép / ngăn chặn bot của các bộ máy tìm kiếm , mạng xã hội truy cập vào các url trên website
    + sitemap.xml --> khai báo các url trên website cho phép các bộ máy tìm kiếm lập chỉ mục

  +) JSON-LD: khai báo cáu trúc dữ liệu của trang web choa các bộ máy tìm kiếm(Schema)

*/
