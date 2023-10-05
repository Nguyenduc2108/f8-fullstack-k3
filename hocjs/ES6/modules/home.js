//Export
/*
    1.Export default -> trong 1 file chi co 1
    2. Export named -> trong 1 file co the co nhieu
*/
function getUser() {
  return [
    {
      id: 1,
      name: "Hoang an",
    },
    {
      id: 2,
      name: "Nguyen duong",
    },
  ];
}

export function getProduct() {
  return "sanr pham";
}

export const posts = ["Post 1", "Post 2", "Post 3"];

export const getPosts = () => posts;

export default getUser;

export { getProduct, posts };
