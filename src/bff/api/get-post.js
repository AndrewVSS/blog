import { postTransform } from '../transformers/';

export const getPost = async postId =>
    await fetch(`http://localhost:3000/posts/${postId}`)
        .then(loadedPost => loadedPost.json())
        .then(loadedPost => loadedPost && postTransform(loadedPost));
