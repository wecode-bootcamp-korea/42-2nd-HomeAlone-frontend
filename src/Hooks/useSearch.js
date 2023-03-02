import { useEffect, useState } from 'react';

export default function useSearch(initialValue) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState(initialValue);

  //TODO: mock 데이터 연결
  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [keyword]);

  const onChange = e => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const filteredList = products.filter(
    product => product && product.productName.includes(keyword)
  );

  return [filteredList, keyword, onChange];
}
