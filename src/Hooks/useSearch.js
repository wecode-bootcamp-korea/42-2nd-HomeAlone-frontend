import { useEffect, useState } from 'react';
import { API } from '../config/config';

export default function useSearch(initialValue) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState(initialValue);

  useEffect(() => {
    fetch(`${API.PRODUCTS}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => setProducts(data.data));
  }, [keyword]);

  const onChange = e => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const filteredList =
    products !== '' &&
    products.filter(product => product.productName.includes(keyword));

  return [filteredList, keyword, onChange, setKeyword];
}
