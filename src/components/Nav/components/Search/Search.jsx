import React from 'react';
import useSearch from '../../../../Hooks/useSearch';
import SearchBox from '../SearchBox/SearchBox';
import * as S from './Search.style';

export default function Search() {
  const [products, keyword, onChange] = useSearch();

  const filteredList = products.filter(product =>
    product.name.includes(keyword)
  );

  return (
    <>
      <S.SearchInput
        placeholder="🔍 통합검색"
        value={keyword}
        onChange={onChange}
      />
      <SearchBox filteredList={filteredList} keyword={keyword} />
    </>
  );
}
