//JSON => Javascript Object Notation

/*
- la chuot tu 1 object cua js 
- mo ta du lieu 1 cach chinh xac 
- dung de giao tiep du lieu giua cac nen tang 
- JSON ho tro hau het cac ngon ngu lap trinh 

*/

/*
van de:
Web F8(JS)
=> chuyen ve 1 kieu du lieu chung (chuoi) ma cac nen tang deu doc duoc (dam bao tinh toan ven cua du lieu)
-> xml , JSON 
App F8 (java)

trong js co 2 ham thuong dung de xu ly json 

1. chuyen tu kieu du lieu trong js thanh JSON 
JSON.Stringify()

2.chuyen tu JSON ve kieu du lieu tuong ung JSON.parse()

*/

var users = [
  {
    id: 1,
    name: "hoang an ",
  },
  {
    id: 2,
    name: "duong nguyen ",
  },
];
console.log(users);

var json = JSON.stringify(users);
console.log(json);

var users = JSON.parse(json);
console.log(users);
