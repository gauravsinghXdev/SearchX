import React, { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdOutlineContentCopy } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";

const ButtonEvent = ({ onRegenerate, textToCopy }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    setLiked(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex justify-center gap-4 mt-4">
      {/* Like Button */}
      <button
        onClick={handleLike}
        className={`${liked ? "text-blue-500" : "text-white"} flex items-center`}
      >
        <BiLike className="mr-1" />
        {liked ? "Liked" : "Like"}
      </button>

      {/* Dislike Button */}
      <button
        onClick={handleDislike}
        className={`${disliked ? "text-red-500" : "text-white"} flex items-center`}
      >
        <BiDislike className="mr-1" />
        {disliked ? "Disliked" : "Dislike"}
      </button>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className={`flex items-center ${isCopied ? "text-green-500" : ""}`}
      >
        <MdOutlineContentCopy className="mr-1" />
        {isCopied ? "Copied!" : "Copy"}
      </button>

      {/* Regenerate Button */}
      <button onClick={onRegenerate} className="flex items-center">
        <AiOutlineReload className="mr-1" />
        Regenerate
      </button>
    </div>
  );
};

export default ButtonEvent;
