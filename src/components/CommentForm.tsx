import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { set } from 'date-fns';
import styles from './CommentForm.module.css';


interface CommentFormProps {
    setComments: (comments: any) => void;
}
export function CommentForm({ setComments }: CommentFormProps) {
    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateComment(event: FormEvent) {
        event.preventDefault();

        console.log('Comentário criado');
        setComments((comments:any) => [...comments, {
            description: newCommentText,
        }]);
        setNewCommentText('');

    }

    function handleCreateNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('campo obrigatório');

    }

    const isNewCommentTextEmpty = newCommentText.trim().length === 0;
    return (
        <form onSubmit={handleCreateComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea
                value={newCommentText}
                onChange={handleCreateNewComment}
                name="description"
                placeholder="Deixe um comentário"
                onInvalid={handleNewCommentInvalid}
                required
            />
            <footer>
                <button
                    type="submit"
                    disabled={isNewCommentTextEmpty}>
                    Publicar
                </button>
            </footer>
        </form>
    );
}