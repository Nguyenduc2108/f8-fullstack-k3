import bookImage from "@/app/assets/images/book-img.svg";
import homeBg from "@/app/assets/images/home-bg.jpg";
import Image from "next/image";
import p1 from "@/app/assets/images/image/p-1.jpg";
import p2 from "@/app/assets/images/image/p-2.jpg";
import p3 from "@/app/assets/images/image/p-3.jpg";
import p4 from "@/app/assets/images/image/p-4.jpg";
import p5 from "@/app/assets/images/image/p-5.jpg";
import p6 from "@/app/assets/images/image/p-6.jpg";

import Link from "next/link";
import React from "react";

const getPages = async () => {
  const response = await fetch(`https://api-pages.vercel.app/api/v1/pages`);
  return response.json();
};

export default async function Content() {
  const listPage = await getPages();
  return (
    <div>
      <div>
        <Image
          src={homeBg}
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          alt="homeimg"
          className="relative"
        />
        <div
          className="absolute text-white text-center"
          style={{ top: "45%", left: "26%" }}
        >
          <h2 className="text-5xl mb-3">MỌI CHUYẾN ĐI ĐỀU ĐÁNG GIÁ</h2>
          <h3 className="text-3xl mb-3">
            Khám Phá Các Vùng Đất Mới Cùng Chúng Tôi
          </h3>
          <h4 className="text-3xl mb-3 ">Những Chuyến Đi Đang Chờ Đợi Bạn</h4>
          <button className=" w-max text-center btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-orange-500 bg-orange-500 hover:bg-transparent text-white hover:text-orange-500 font-normal py-2 px-4 rounded">
            Khám Phá Ngay
          </button>
        </div>
      </div>
      <div className="mt-14" id="book">
        <div className="text-center text-4xl">
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            T
          </span>
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            Ì
          </span>
          <span className="text-orange-500 rounded-md mr-6 p-2 bg-orange-400/30">
            M
          </span>
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            Ư
          </span>
          <span className="text-orange-500 rounded-md mr-6 p-2 mr-2 bg-orange-400/30">
            U
          </span>

          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            Đ
          </span>
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            Ã
          </span>
          <span className="text-orange-500 rounded-md p-2 bg-orange-400/30">
            I
          </span>
        </div>
        <div
          style={{ maxWidth: "1255px", margin: "30px auto" }}
          className="flex"
        >
          <Image src={bookImage} height={620} width={620} alt="book-img" />
          <form
            action=""
            className="p-4 shadow-2xl rounded-xl"
            style={{ width: "620px" }}
          >
            <div className="p-4">
              <h3 className="text-xl mb-2 font-bold">
                Hãy Liên Hệ Với Tôi Bằng :
              </h3>
              <input
                className="border-2 border-gray-300 w-full p-2"
                type="text"
                placeholder="Email hoặc số điện thoại"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl mb-2 font-bold">Tôi Muốn Đến :</h3>
              <div className="flex justify-between align-baseline mb-2">
                <span className="text-xl">Viet Nam</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <input
                className="border-2 border-gray-300 w-full p-2"
                type="text"
                placeholder="Địa điểm chính xác"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl mb-2 font-bold">Chúng Tôi Có :</h3>
              <input
                className="border-2 border-gray-300 w-full p-2"
                type="number"
                placeholder="Số người"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl mb-2 font-bold">Bắt Đầu Từ :</h3>
              <input
                className="border-2 border-gray-300 w-full p-2"
                type="date"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl mb-2 font-bold">Kết Thúc Vào :</h3>
              <input
                className="border-2 border-gray-300 w-full p-2"
                type="date"
              />
            </div>
            <Link href="/" className="p-4">
              <button className="border-2 p-2 w-24 ease-in transition-colors duration-200 text-white hover:bg-orange-200 hover:text-orange-400 bg-orange-400 border-orange-400">
                Tìm Ngay
              </button>
            </Link>
          </form>
        </div>
      </div>
      <div className="mt-14">
        <div className="text-center text-4xl">
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            C
          </span>
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            H
          </span>
          <span className="text-orange-500 rounded-md mr-6 p-2 bg-orange-400/30">
            O
          </span>

          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            B
          </span>
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            Ạ
          </span>
          <span className="text-orange-500 rounded-md p-2 bg-orange-400/30">
            N
          </span>
        </div>
      </div>
      <div
        className="shadow-xl rounded-md"
        style={{ maxWidth: "1255px", margin: "30px auto" }}
      >
        <Image
          src={homeBg}
          alt="home-bg"
          className="w-full rounded-t-lg"
          style={{ maxHeight: "250px", objectFit: "cover" }}
        />
        <div className="p-5 leading-8">
          <p
            className="flex font-bold align-baseline"
            style={{ fontSize: "20px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span>Tokyo</span>
          </p>
          <p className="opacity-60">Truyền Thống Và Tương Lai</p>
          <p className="opacity-60">Ưu Đãi 6.500.000 Cho 1người/7ngày</p>
          <div className="flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 fill-orange-500 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 fill-orange-500 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 fill-orange-500 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 fill-orange-500 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </span>
          </div>
          <button className="border-2 p-2 mt-4 text-lg w-32 ease-in transition-colors duration-200 text-white hover:bg-orange-200 hover:text-orange-400 bg-orange-400 border-orange-400">
            Đặt ngay
          </button>
        </div>
      </div>
      <div className="mt-14" id="endow">
        <div className="text-center text-4xl">
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            Ư
          </span>
          <span className="text-orange-500 rounded-md mr-6 p-2 mr-2 bg-orange-400/30">
            U
          </span>

          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            Đ
          </span>
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            Ã
          </span>
          <span className="text-orange-500 rounded-md p-2 bg-orange-400/30">
            I
          </span>
        </div>
      </div>
      <div
        className="grid grid-cols-3 grid-rows-2 gap-4"
        style={{ maxWidth: "1255px", margin: "30px auto" }}
      >
        {listPage.map(({ id, home, destinationBox }) => {
          return (
            <div key={id} className="shadow-xl rounded-md">
              <Image
                src={`https://api-pages.vercel.app${destinationBox[0].src}`}
                alt="home-bg"
                className="w-full rounded-t-lg"
                height={250}
                width={100}
                style={{
                  minHeight: "250px",
                  maxHeight: "250px",
                  objectFit: "cover",
                }}
              />
              <div className="p-5 leading-8">
                <p
                  className="flex font-bold align-baseline"
                  style={{ fontSize: "20px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-orange-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span>{home.name}</span>
                </p>
                <p className="opacity-60">{home.content}</p>
                <p className="opacity-60">Ưu Đãi 6.500.000 Cho 1người/7ngày</p>
                <div className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 fill-orange-500 text-orange-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 fill-orange-500 text-orange-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 fill-orange-500 text-orange-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 fill-orange-500 text-orange-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-orange-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-3">
                  <span className="text-2xl mr-2">30.000.000</span>
                  <span className="line-through opacity-60 ">52.845.245</span>
                </div>
                <button className="border-2 p-2 mt-4 text-lg w-32 ease-in transition-colors duration-200 text-white hover:bg-orange-200 hover:text-orange-400 bg-orange-400 border-orange-400">
                  Đặt ngay
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-14" id="service">
        <div className="text-center text-4xl">
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            D
          </span>
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            Ị
          </span>
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            C
          </span>

          <span className="text-orange-500 rounded-md mr-6 p-2  bg-orange-400/30">
            H
          </span>
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            V
          </span>
          <span className="text-orange-500 rounded-md p-2 bg-orange-400/30">
            Ụ
          </span>
        </div>
      </div>
      <div
        className="grid grid-cols-4 gap-4"
        style={{ maxWidth: "1255px", margin: "30px auto" }}
      >
        <div className="p-4 text-center transition-shadow duration-300 ease-in-out hover:shadow-xl">
          <p className="font-bold text-2xl my-2 ">Nghỉ dưỡng cao cấp</p>
          <p>Some Text...</p>
        </div>
        <div className="p-4 text-center transition-shadow duration-300 ease-in-out hover:shadow-xl">
          <p className="font-bold text-2xl my-2 ">Dịch vụ ăn uống</p>
          <p>Some Text...</p>
        </div>
        <div className=" p-4 text-center transition-shadow duration-300 ease-in-out hover:shadow-xl">
          <p className="font-bold text-2xl my-2 ">Chính sách an toàn</p>
          <p>Some Text...</p>
        </div>
        <div className=" p-4 text-center transition-shadow duration-300 ease-in-out hover:shadow-xl">
          <p className="font-bold text-2xl my-2 ">Rộng khắp thế giới</p>
          <p>Some Text...</p>
        </div>
        <div className="col-span-2 p-4 transition-shadow duration-300 ease-in-out text-center hover:shadow-xl">
          <p className="font-bold text-2xl my-2 ">Tốc độ cao</p>
          <p>Some Text...</p>
        </div>
        <div className="col-span-2 p-4 transition-shadow duration-300 ease-in-out text-center hover:shadow-xl">
          <p className="font-bold text-2xl my-2 ">Những cuộc phiêu lưu</p>
          <p>Some Text...</p>
        </div>
      </div>
      <div className="mt-14" id="library">
        <div className="text-center text-4xl">
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            T
          </span>
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            H
          </span>
          <span className="text-orange-500 rounded-md mr-6 p-2  bg-orange-400/30">
            Ư
          </span>

          <span className="text-orange-500 rounded-md mr-2  p-2  bg-orange-400/30">
            V
          </span>
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            I
          </span>
          <span className="text-orange-500 rounded-md mr-2 p-2 bg-orange-400/30">
            Ệ
          </span>
          <span className="text-orange-500 rounded-md p-2 bg-orange-400/30">
            N
          </span>
        </div>
      </div>
      <div
        className="grid grid-cols-4 gap-4"
        style={{ maxWidth: "1255px", margin: "30px auto" }}
      >
        <div
          className="shadow-xl overflow-hidden bg-white rounded-lg relative"
          id="library-container"
        >
          <Image
            src={p1}
            alt="p1-image"
            // width={283}
            // height={231}
            style={{ objectFit: "cover" }}
            className="p-4 text-center"
          />
          <div
            id="overlay"
            className="absolute -top-full flex justify-center items-center gap-2 flex-col h-full bg-black/70 text-center"
          >
            <h3 className="text-xl text-orange-400">Ảnh chụp</h3>
            <p className="text-white">
              Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
              lên đây
            </p>
            <button className="border-2 p-2 w-24 ease-in transition-colors duration-200 text-white hover:bg-orange-200 hover:text-orange-400 bg-orange-400 border-orange-400">
              Xem thêm
            </button>
          </div>
        </div>
        <div
          className="shadow-xl overflow-hidden bg-white rounded-lg relative"
          id="library-container"
        >
          <Image
            src={p2}
            alt="p2-image"
            // width={283}
            // height={231}
            style={{
              minHeight: "211px",
              maxHeight: "211px",
              objectFit: "cover",
            }}
            className="p-4 text-center"
          />
          <div
            id="overlay"
            className="absolute -top-full flex justify-center items-center gap-2 flex-col h-full bg-black/70 text-center"
          >
            <h3 className="text-xl text-orange-400">Ảnh chụp</h3>
            <p className="text-white">
              Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
              lên đây
            </p>
            <button className="border-2 p-2 w-24 ease-in transition-colors duration-200 text-white hover:bg-orange-200 hover:text-orange-400 bg-orange-400 border-orange-400">
              Xem thêm
            </button>
          </div>
        </div>
        <div
          className="shadow-xl overflow-hidden bg-white rounded-lg relative"
          id="library-container"
        >
          <Image
            src={p3}
            alt="p3-image"
            // width={283}
            // height={231}
            style={{
              minHeight: "211px",
              maxHeight: "211px",
              objectFit: "cover",
            }}
            className="p-4 text-center"
          />
          <div
            id="overlay"
            className="absolute -top-full flex justify-center items-center gap-2 flex-col h-full bg-black/70 text-center"
          >
            <h3 className="text-xl text-orange-400">Ảnh chụp</h3>
            <p className="text-white">
              Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
              lên đây
            </p>
            <button className="border-2 p-2 w-24 ease-in transition-colors duration-200 text-white hover:bg-orange-200 hover:text-orange-400 bg-orange-400 border-orange-400">
              Xem thêm
            </button>
          </div>
        </div>
        <div
          className="shadow-xl overflow-hidden bg-white rounded-lg relative"
          id="library-container"
        >
          <Image
            src={p4}
            alt="p4-image"
            // width={283}
            // height={231}
            style={{ objectFit: "cover" }}
            className="p-4 text-center"
          />
          <div
            id="overlay"
            className="absolute -top-full flex justify-center items-center gap-2 flex-col h-full bg-black/70 text-center"
          >
            <h3 className="text-xl text-orange-400">Ảnh chụp</h3>
            <p className="text-white">
              Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
              lên đây
            </p>
            <button className="border-2 p-2 w-24 ease-in transition-colors duration-200 text-white hover:bg-orange-200 hover:text-orange-400 bg-orange-400 border-orange-400">
              Xem thêm
            </button>
          </div>
        </div>
        <div
          className="shadow-xl overflow-hidden bg-white rounded-lg relative"
          id="library-container"
        >
          <Image
            src={p5}
            alt="p5-image"
            // width={283}
            // height={231}
            style={{ objectFit: "cover" }}
            className="p-4 text-center"
          />
          <div
            id="overlay"
            className="absolute -top-full flex justify-center items-center gap-2 flex-col h-full bg-black/70 text-center"
          >
            <h3 className="text-xl text-orange-400">Ảnh chụp</h3>
            <p className="text-white">
              Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
              lên đây
            </p>
            <button className="border-2 p-2 w-24 ease-in transition-colors duration-200 text-white hover:bg-orange-200 hover:text-orange-400 bg-orange-400 border-orange-400">
              Xem thêm
            </button>
          </div>
        </div>
        <div
          className="shadow-xl overflow-hidden bg-white rounded-lg relative"
          id="library-container"
        >
          <Image
            src={p6}
            alt="p6-image"
            // width={283}
            // height={231}
            style={{
              minHeight: "211px",
              maxHeight: "211px",
              objectFit: "cover",
            }}
            className="p-4 text-center"
          />
          <div
            id="overlay"
            className="absolute -top-full flex justify-center items-center gap-2 flex-col h-full bg-black/70 text-center"
          >
            <h3 className="text-xl text-orange-400">Ảnh chụp</h3>
            <p className="text-white">
              Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
              lên đây
            </p>
            <button className="border-2 p-2 w-24 ease-in transition-colors duration-200 text-white hover:bg-orange-200 hover:text-orange-400 bg-orange-400 border-orange-400">
              Xem thêm
            </button>
          </div>
        </div>
        <div
          className="shadow-xl overflow-hidden bg-white rounded-lg relative"
          id="library-container"
        >
          <Image
            src={p1}
            alt="p1-image"
            // width={283}
            // height={231}
            style={{ objectFit: "cover" }}
            className="p-4 text-center"
          />
          <div
            id="overlay"
            className="absolute -top-full flex justify-center items-center gap-2 flex-col h-full bg-black/70 text-center"
          >
            <h3 className="text-xl text-orange-400">Ảnh chụp</h3>
            <p className="text-white">
              Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
              lên đây
            </p>
            <button className="border-2 p-2 w-24 ease-in transition-colors duration-200 text-white hover:bg-orange-200 hover:text-orange-400 bg-orange-400 border-orange-400">
              Xem thêm
            </button>
          </div>
        </div>
        <div
          className="shadow-xl overflow-hidden bg-white rounded-lg relative"
          id="library-container"
        >
          <Image
            src={p2}
            alt="p2-image"
            // width={283}
            // height={231}
            style={{ objectFit: "cover" }}
            className="p-4 text-center"
          />
          <div
            id="overlay"
            className="absolute -top-full flex justify-center items-center gap-2 flex-col h-full bg-black/70 text-center"
          >
            <h3 className="text-xl text-orange-400">Ảnh chụp</h3>
            <p className="text-white">
              Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
              lên đây
            </p>
            <button className="border-2 p-2 w-24 ease-in transition-colors duration-200 text-white hover:bg-orange-200 hover:text-orange-400 bg-orange-400 border-orange-400">
              Xem thêm
            </button>
          </div>
        </div>
        <div
          className="shadow-xl overflow-hidden bg-white rounded-lg relative col-span-4 "
          id="library-container"
        >
          <Image
            src={p3}
            alt="p3-image"
            width={283}
            height={250}
            style={{ width: "100%", maxHeight: "250px", objectFit: "cover" }}
            className="p-4 text-center"
          />
          <div
            id="overlay"
            className="absolute -top-full flex justify-center items-center gap-2 flex-col h-full bg-black/70 text-center"
          >
            <h3 className="text-3xl text-orange-400">Ảnh chụp</h3>
            <p className="text-white text-xl">
              Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
              lên đây
            </p>
            <button className="border-2 p-2 w-24 ease-in transition-colors duration-200 text-white hover:bg-orange-200 hover:text-orange-400 bg-orange-400 border-orange-400">
              Xem thêm
            </button>
          </div>
        </div>
      </div>
      <div className="mt-14" id="feedback">
        <div className="text-center text-4xl">
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            Đ
          </span>
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            Á
          </span>
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            N
          </span>
          <span className="text-orange-500 rounded-md p-2 mr-6  bg-orange-400/30">
            H
          </span>

          <span className="text-orange-500 rounded-md  p-2 mr-2 bg-orange-400/30">
            G
          </span>
          <span className="text-orange-500 rounded-md mr-2 p-2 bg-orange-400/30">
            I
          </span>
          <span className="text-orange-500 rounded-md p-2 bg-orange-400/30">
            Á
          </span>
        </div>
      </div>
      <div
        className="shadow-xl p-5 flex"
        style={{ maxWidth: "1255px", margin: "30px auto" }}
      >
        <div className="w-max flex flex-col justify-center items-center ">
          <p className="text-2xl font-bold text-orange-400 ">
            Đánh giá chuyến đi của bạn
          </p>
          <div className="flex text-slate-400 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 hover:fill-orange-400 hover:text-orange-400 fill-slate-400 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 hover:fill-orange-400 hover:text-orange-400 fill-slate-400 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 hover:fill-orange-400 hover:text-orange-400 fill-slate-400 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 hover:fill-orange-400 hover:text-orange-400 fill-slate-400 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 hover:fill-orange-400 hover:text-orange-400 fill-slate-400 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
        </div>
        <form className="w-full">
          <div className="shadow-xl p-3">
            <textarea
              name=""
              id=""
              placeholder="Viết đánh giá của bạn"
              className="h-52  w-full resize-none text-xl p-4 border-orange-300 border-2 "
            ></textarea>
          </div>
          <div>
            <button className="border-2 p-2 w-full mt-3 ease-in transition-colors duration-200 text-white hover:bg-orange-200 hover:text-orange-400 bg-orange-400 border-orange-400">
              Gửi tới chúng tôi
            </button>
          </div>
        </form>
      </div>
      <div className="mt-14">
        <div className="text-center text-4xl">
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            L
          </span>
          <span className="text-orange-500 rounded-md  p-2 mr-2 bg-orange-400/30">
            I
          </span>
          <span className="text-orange-500 rounded-md p-2 mr-2 bg-orange-400/30">
            Ê
          </span>
          <span className="text-orange-500 rounded-md mr-6 p-2 mr-2 bg-orange-400/30">
            N
          </span>
          <span className="text-orange-500 rounded-md mr-2 p-2 bg-orange-400/30">
            H
          </span>
          <span className="text-orange-500 rounded-md p-2 bg-orange-400/30">
            Ệ
          </span>
        </div>
      </div>
      <div
        className="shadow-xl p-5 flex"
        style={{ maxWidth: "1255px", margin: "30px auto" }}
      >
        <div className="mr-3">
          <iframe
            style={{ width: "545px", height: "353px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.4064000497674!2d105.78126121547308!3d20.976340386026827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acd2d89877d7%3A0xe55435164e9b4695!2zMTk3IFRy4bqnbiBQaMO6LCBQLiBWxINuIFF1w6FuLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1650976801748!5m2!1svi!2s"
            frameborder="0"
          ></iframe>
        </div>
        <form className="shadow-xl w-full p-4" style={{ height: "360px" }}>
          <div className="grid grid-cols-2 gap-3">
            <input
              className="border-2 p-2 h-max "
              type="text"
              placeholder="Tên của bạn"
            />
            <input
              className="border-2 p-2 h-max "
              type="email"
              placeholder="Email liên hệ"
            />
            <input
              className="border-2 p-2 h-max "
              type="number"
              placeholder="Số điện thoại"
            />
            <input
              className="border-2 p-2 h-max "
              type="text"
              placeholder="Chủ đề"
            />
            <textarea
              placeholder="Viết lời nhắn của bạn"
              className="resize-none w-full col-span-2 p-2 border-2"
              style={{ height: "150px" }}
            ></textarea>
          </div>
          <div>
            <button className="border-2 p-2 w-full mt-3 ease-in transition-colors duration-200 text-white hover:bg-orange-200 hover:text-orange-400 bg-orange-400 border-orange-400">
              Gửi tới chúng tôi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
