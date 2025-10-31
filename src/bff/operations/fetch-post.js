import { getPost } from '../api';

export const fetchPost = async postId => {
    console.log('fetchPost id:', postId);
    const post = await getPost(postId);

    return {
        error: null,
        res: post,
    };
};
