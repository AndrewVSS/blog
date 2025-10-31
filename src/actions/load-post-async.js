import { setPostData } from './set-post-data.js';

export const loadPostAsync = (requestServer, postId) => dispatch => {
    if (!postId) {
        console.warn('loadPostAsync called with null postId');
        return;
    }

    requestServer('fetchPost', postId).then(postData => {
        if (postData?.res) {
            dispatch(setPostData(postData.res));
        } else {
            console.error('Post not found');
        }
    });
};
