import district from "@/data/quan_huyen.json";

export function GET(request) {
  const provinceId = request.nextUrl.serachParams.get("province_id");

  if (!provinceId) {
    return Response.json({
      status: "error",
      message: "ProvinceId is required",
    });
  }

  const data = Object.values(district).filter(({ parent_code }) => {
    return parent_code === provinceId;
  });
  data.sort((a, b) => {
    return a.code - b.code;
  });
  const response = {
    stasus: "success",
    data: Object.values(district),
  };
  return Response.json(response);
}
