import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { loadPostAsync } from '../../actions';
import { useServerRequest } from '../../hooks';
import { selectPost } from '../../selectors';
import { Comments, PostContents } from './components';

const PostContainer = ({ className }) => {
    console.log('✅ PostContainer rendered!');
    const post = useSelector(selectPost);
    const dispatch = useDispatch();
    const params = useParams();
    const requestServer = useServerRequest();
    console.log('params:', params);

    useEffect(() => {
        dispatch(loadPostAsync(requestServer, params.id));
    }, [params.id, dispatch]);

    return (
        <div className={className}>
            <PostContents post={post} />
            {post && <Comments comments={post.comments} />}
        </div>
    );
};

export const Post = styled(PostContainer)`
    padding: 0 80px;
    margin: 40px 0:
`;
