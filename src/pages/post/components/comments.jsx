import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/header/components/icon.jsx';
import { Comment } from './comment.jsx';

const CommentsContainer = ({ className, comments }) => {
    const [newComment, setNewComment] = useState('');

    return (
        <div className={className}>
            <div className="new-comment">
                <textarea
                    value={newComment}
                    placeholder="Комментарии..."
                    onChange={({ target }) => setNewComment(target.value)}
                ></textarea>
                <Icon id="fa-regular fa-paper-plane" margin="10px 0px 0 15px" />
            </div>

            <div className="comments">
                {comments.map(({ id, author, content, publishedAt }) => (
                    <Comment
                        key={id}
                        id={id}
                        author={author}
                        content={content}
                        publishedAt={publishedAt}
                    />
                ))}
            </div>
        </div>
    );
};

export const Comments = styled(CommentsContainer)`
    width: 580px;
    margin: 20px auto;

    & textarea {
        width: 100%;
    }
`;
