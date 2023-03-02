import { useEffect, useState } from 'react';

export default function usePost() {
  const [posts, setPosts] = useState([]);

  //TODO: mock 데이터 연결
  useEffect(() => {
    fetch('/data/posts.json')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return [posts];
}
