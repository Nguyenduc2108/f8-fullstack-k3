import provinces from "@/data/tinh_tp.json";

export function GET() {
  const data = Object.values(provinces);
  data.sort((a, b) => {
    return a.code - b.code;
  });
  const response = {
    stasus: "success",
    data: Object.values(provinces),
  };
  return Response.json(response);
}
