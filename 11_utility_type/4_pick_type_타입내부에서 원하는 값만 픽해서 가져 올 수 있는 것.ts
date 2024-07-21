/**
 * Pick Type - 원하는 값만 가져올 수 있는 것? 
 * 내가 원하는 것만 고를 수 있다.
 * 고르다 라는 의미로 사용된다. 
 */
interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

// Post 타입에서 'title', 'content' 만 넣을 것이다.
function createPost(post: Pick<Post, 'title' | 'content'>): Post {
  return {
    ...post,
    createdAt: new Date(),
  };
}

createPost({
  title: '요즘 개발자 취업 어떤가요?',
  content: '나이 30 넘어서도 해볼만한가요?',
});