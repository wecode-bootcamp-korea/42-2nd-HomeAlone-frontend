const BASE_URl_S = 'http://10.58.52.176:8000';
const BASE_URl_J = 'http://10.58.52.228:8000';

export const API = {
  LOGIN: `${BASE_URl_S}/users/kakaoLogin`,
  POSTS: `${BASE_URl_S}/posts`,
  PRODUCTS: `${BASE_URl_J}/products`,
  CARTS: `${BASE_URl_S}/carts`,
  FROMCART: `${BASE_URl_S}/carts?fromCart`,
  PAYMENTS: `${BASE_URl_J}/payments`,
  SCRAPS: `${BASE_URl_S}/scraps`,
  COMMENTS: `${BASE_URl_S}/comments`,
  REVIEWS: `${BASE_URl_J}/reviews`,
};

export default API;
