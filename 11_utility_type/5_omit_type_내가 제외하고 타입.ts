/**
 * Omit Type - 내가 제외하고 싶은 타입만 고를 수 있다.
 */
interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

function createPost(post: Omit<Post, 'createdAt'>): Post {
  return {
    ...post,
    createdAt: new Date(),
  };
}

createPost({
  title: '요즘 개발자 취업 어떤가요?',
  content: '나이 30 넘어서도 해볼만한가요?',
});