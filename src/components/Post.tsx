import { useState } from 'react';
import styles from './Post.module.css';
import { CommentForm } from './CommentForm';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}
export interface PostContent {
    type: string
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: PostContent[];

}
export interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState([{
        id: 1,
        description: "primeiro comment",
    }]);

    const publishedDateRelativeToNow = formatDistanceToNow(
        post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    const publishedDateFormat = format(
        post.publishedAt,
        "d 'de' LLLL 'às' HH:mm'h'",
        { locale: ptBR },
    );

    function deleteComment(id : number) {
        console.log('deletar Comentário', comment.id);
        const commentsWithoutDeletedOne = comments.filter((c: any) => c.id !== comment.id);
        console.log(`deletar Comentário ${comment}`);
    }
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span> {post.author.role}</span>
                    </div>
                </div>
                <time
                    title={publishedDateFormat}
                    dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map((line, index) => {
                    if (line.type !== 'link') {
                        return (<p key={index}>{line.content}</p>)
                    }
                })}

                <p>
                    <a href="#">osvaldoabel.dev</a>{' '}
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#"> #nlw </a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                </p>
            </div>
            <CommentForm setComments={setComments} />

            <div className={styles.comments}>
                {comments.map((comment, index) => {
                    return <Comment
                        onDeleteComment={deleteComment}
                        key={index}
                        comment={comment}
                        author={post.author}
                    />
                })}
            </div>
        </article>
    );
}