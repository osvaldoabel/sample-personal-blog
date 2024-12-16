import 'react'

import { Header } from './components/Header'
import { Post,PostType, Author } from './components/Post'

import styles from './App.module.css'

import './globals.css'
import { Sidebar } from './components/Sidebar'

const posts: PostType[] = [{
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/3024922?v=4",
      name: "Osvaldo Abel",
      role: "Software Engineer @ Blackwise"
    },
    content: [
      {type: 'paragraph', content: `Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`},
      {type: 'paragraph', content: `Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`},
      {type: 'link', content: "#novoprojeto"},
      {type: 'link', content: "#nlw"},
      {type: 'link', content: "#rocketseat"}
    ],
    publishedAt: new Date("2024-05-11T08:13:00Z"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/3024922?v=4",
      name: "Osvaldo Abel",
      role: "Software Engineer @ Blackwise"
    },
    content: [
      {type: 'link', content: "#nlw"},
      {type: 'paragraph', content: `Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`},
      {type: 'paragraph', content: `Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`},
      {type: 'link', content: "#novoprojeto"},
      {type: 'link', content: "#rocketseat"}
    ],
    publishedAt: new Date("2024-08-15T06:13:00Z"),
  }
];
export function App() {
  const post = {
    description: "First Post Content",
    publishedAt: "2022-05-11T08:13:00Z",
    imageSrc: "https://avatars.githubusercontent.com/u/3024922?v=4",

    author: {
      name: "Osvaldo Abel",
      ocupation: "Software Engineer",
      imageSrc: "https://avatars.githubusercontent.com/u/3024922?v=4",
    },
  };
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                   />
              )
          })}
        </main>
      </div>
    </div>
  )
}