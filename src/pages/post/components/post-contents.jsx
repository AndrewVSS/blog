import styled from 'styled-components';
import { H2 } from '../../../components/';
import { Icon } from '../../../components/header/components/icon.jsx';

const PostContentsContainer = ({
    className,
    post: { id, title, imageUrl, content, publishedAt },
}) => {
    return (
        <div className={className}>
            {imageUrl && <img src={imageUrl} alt={title} />}
            <H2>{title}</H2>
            <div className="special-panel">
                <div className="published-at">
                    <Icon id="fa-regular fa-calendar" margin="0 10px 0 0"></Icon>
                    {publishedAt}
                </div>
                <div className="buttons">
                    <Icon id="fa-solid fa-trash" margin="0 10px 0 0"></Icon>
                    <Icon id="fa-regular fa-pen-to-square" margin="0 10px 0 0"></Icon>
                </div>
            </div>
            <div className="post-text">{content}</div>
        </div>
    );
};

export const PostContents = styled(PostContentsContainer)`
    & img {
        float: left;
        margin: 0 20px 10px 0;
    }

    & .post-text,
    h2 {
        text-align: left;
    }

    & .special-panel {
        margin: -20px 0 20px;
        text-align: left;
        display: flex;
        justify-content: space-between;
    }

    & .published-at {
        display: flex;
    }

    & .buttons {
        display: flex;
    }
`;
