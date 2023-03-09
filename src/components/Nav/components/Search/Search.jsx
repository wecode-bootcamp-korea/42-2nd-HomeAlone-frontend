import React, { useState } from 'react';
import useSearch from '../../../../Hooks/useSearch';
import SearchBox from '../SearchBox/SearchBox';
import * as S from './Search.style';

export default function Search() {
  const [filteredList, keyword, onChange, setKeyword] = useSearch();
  const [isClicked, setIsClicked] = useState(false);

  const handleSearch = e => {
    e.preventDefault();
    setIsClicked(prev => !prev);
    setKeyword('');
  };

  return (
    <>
      <S.SearchInput
        placeholder="🔍 통합검색"
        value={keyword}
        onChange={onChange}
      />
      {!isClicked && (
        <SearchBox
          filteredList={filteredList}
          keyword={keyword}
          handleSearch={handleSearch}
        />
      )}
    </>
  );
}
