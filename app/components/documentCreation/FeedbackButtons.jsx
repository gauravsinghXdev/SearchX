// FeedbackButtons.jsx
import React from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import { MdOutlineContentCopy } from 'react-icons/md';
import { AiOutlineReload } from 'react-icons/ai';

const FeedbackButtons = ({
  liked,
  setLiked,
  disliked,
  setDisliked,
  isCopied,
  setIsCopied,
  responseText,
  handleRegenerate,
}) => {
  const handleLike = () => {
    setLiked(!liked);
    setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    setLiked(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(responseText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginTop: "20px",
        color: "white",
      }}
    >
      <button
        onClick={handleLike}
        style={{
          color: liked ? "blue" : "white",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
        }}
      >
        <BiLike style={{ fontSize: "24px" }} />
      </button>
      <button
        onClick={handleDislike}
        style={{
          color: disliked ? "red" : "white",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
        }}
      >
        <BiDislike style={{ fontSize: "24px" }} />
      </button>
      <button
        onClick={handleCopy}
        style={{
          color: isCopied ? "green" : "white",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
        }}
      >
        <MdOutlineContentCopy style={{ fontSize: "24px" }} />
      </button>
      <button
        onClick={handleRegenerate}
        style={{
          color: "white",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
        }}
      >
        <AiOutlineReload style={{ fontSize: "24px" }} />
      </button>
    </div>
  );
};

export default FeedbackButtons;
