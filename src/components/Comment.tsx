import { FormEvent, MouseEvent, useState} from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { Trash, ThumbsUp } from "@phosphor-icons/react";
import { Author } from './Post';

interface Comment {
  id : number;
  description: string;
}
interface CommentProps {
  onDeleteComment: (event ) => void;
  author: Author
  comment: Comment;
}
export function Comment({ comment, author, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(event: MouseEvent<HTMLButtonElement>) {
    // onDeleteComment(id);
    console.log('Comentário deletado', event.target);
  }

  function handleLikeComment(event: MouseEvent<HTMLButtonElement>)  { 
    setLikeCount((likeCount) => {
        return likeCount + 1;
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/3024922?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time
                title="11 de maio de 2022 às 08:13h" dateTime="2022-05-11T08:13:00">
                há certa de 1h
              </time>
            </div>

            <button
              value={comment.id}
              onClick={handleDeleteComment}
              title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{comment.description}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment} title='aplaudir'>
            <ThumbsUp size={20} />
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}