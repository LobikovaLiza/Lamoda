const generateProducts = (n = 10) => {
  const products = [];
  for (let i = 0; i < n; i++) {
    products.push(generateProduct());
  }
  return products;
};
const colors = ["Белый", "Чёрный", "Красный", "Жёлтый", "Синий"];
const categorys = [
  "Туфли",
  "Кеды",
  "Майки",
  "Байки",
  "Худи",
  "Блузки",
  "Кофты",
  "Джинсы",
  "Костюмы",
  "Куртки"
];
export { generateProducts, colors, categorys };
const generateProduct = () => ({
  id: Math.floor(Math.random() * 10000000),
  name: getRandomString(),
  description: getRandomDescription(),
  color: getRandomColor(),
  category: getRandomCategory(),
  price: getRandomPrice(),
  rating: getRandomRating(),
  img_prod: getRandomImg()
});

const getRandomString = () => Math.random().toString(36).substring(2);
const getRandomDescription = () => {
  let description = " ";
  for (let i = 0; i < Math.random() * 5; i++) {
    description = description + Math.random().toString(36).substring(2) + " ";
  }
  return description;
};
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * 5)];
};
const getRandomCategory = () => {
  return categorys[Math.floor(Math.random() * 10)];
};
const getRandomPrice = () => Math.floor(Math.random() * 9999);
const getRandomRating = () => (Math.random() * 5).toFixed(1);
const getRandomImg = () => {
  let imgs_product = [
    "https://nazya.com/anyimage/ae01.alicdn.com/kf/HTB1cX3ZgsnI8KJjSsziq6z8QpXaX/-.jpg",
    "https://avatars.mds.yandex.net/i?id=a34976721d1c8414577e20730a85360846817950-10455853-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=eabe618c0cc697efd4eb1ee62119219f6677a8e2-9863899-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=c3aa5541c8ff1eea435f9935a610d2df-3920892-images-thumbs&n=13",
    "https://ae01.alicdn.com/kf/HTB14ItGX7P2gK0jSZPxq6ycQpXa9/Men-Clothing-Smiling-Face-Print-Hoodie-Sweatshirt-Unisex-Couple-Spring-Autumn-Long-Sleeve-Casual-O-neck.jpg",
    "https://ae01.alicdn.com/kf/HTB18Z_NOpXXXXa6XFXXq6xXFXXXa/-.jpg",
    "https://avatars.mds.yandex.net/i?id=db8ba9dd3ea09a3aaa804869969c0d3d7eafbe24-8819379-images-thumbs&n=13",
    "https://ae01.alicdn.com/kf/HTB15mYRNVXXXXbKXVXXq6xXFXXX6/MEBOSYA-2016-Summer-Men-s-Jeans-Brand-Clothing-Casual-29-42-Slim-Blue-Straight-Denim-Jeans.jpg",
    "https://ae04.alicdn.com/kf/H5139908d059c472abfc69418751334dfJ.jpg",
    "http://gw.alicdn.com/bao/uploaded/i3/1776955616/TB2LpMReVXXXXaUXpXXXXXXXXXX_!!1776955616.jpg"
  ];
  return imgs_product[Math.floor(Math.random() * 10)];
};
