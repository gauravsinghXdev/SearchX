import styles from "@/styles/IdeaGenerationFour/ChatBox.module.css";
import { GrAttachment } from "react-icons/gr";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MdOutlineEdit } from "react-icons/md";
import sendIcon from "@/public/IdeaGenerationFour/send.svg";
import imgIcon from "@/public/IdeaGenerationFour/Icon.svg";
import icon from "@/public/IdeaGeneration/messageIcon.png";

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [editingMessageIndex, setEditingMessageIndex] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const textAreaRef = useRef(null);
  const messagesEndRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input && !attachment && !image) return;

    const userMessage = {
      role: "user",
      content: input,
      attachment: attachment ? URL.createObjectURL(attachment) : null,
      image: image ? URL.createObjectURL(image) : null,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setAttachment(null);
    setImage(null);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await response.json();
      setMessages([...newMessages, data.result]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (index, content) => {
    setEditingMessageIndex(index);
    setEditInput(content);
  };

  const handleCancelEdit = () => {
    setEditingMessageIndex(null);
    setEditInput("");
  };

  const handleSaveEdit = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].content = editInput;
    setMessages(updatedMessages);
    setEditingMessageIndex(null);
  };

  const handleAttachmentClick = () => {
    document.getElementById("file-input").click();
  };

  const handleImageClick = () => {
    document.getElementById("image-input").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachment(file);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className={`flex h-screen w-full ${styles.sidebar} rounded-lg resize`}>
      {" "}
      <div className="flex-1 flex flex-col">
        <div
          className="flex-1 overflow-y-auto p-4 max-w-[750px]"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            overflowY: "scroll",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 rounded-[30px] p-1 relative ${
                msg.role === "user" ? "text-right" : "text-left"
              }`}
            >
              {editingMessageIndex === index ? (
                <div className="flex flex-col space-y-2">
                  <textarea
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                    className="p-2 rounded-lg text-white bg-[#3F3F3F]"
                    rows={3}
                    style={{
                      minHeight: "60px",
                      maxHeight: "150px",
                      resize: "vertical",
                      overflowY: "auto",
                    }}
                  />
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={handleCancelEdit}
                      className="bg-[#3F3F3F] text-[#686567] p-1 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSaveEdit(index)}
                      className="bg-[#6949FF] text-[#e5dee3] p-1 rounded-lg"
                    ></button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-end items-start group">
                  {msg.role === "user" && (
                    <MdOutlineEdit
                      onClick={() => handleEditClick(index, msg.content)}
                      className={`text-gray-400 cursor-pointer hover:text-white mr-2 ${styles.edithover} hidden group-hover:block`}
                    />
                  )}
                  <div className="flex items-start justify-end space-x-4">
                    <span
                      className={`inline-block p-2 rounded-lg bg-[#3F3F3F] text-white ${
                        msg.role === "user" ? styles.sendButton : styles.sidebar
                      } group-hover:flex`}
                      style={{
                        maxWidth: "75%",
                        display: "inline-block",
                        wordWrap: "break-word",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {msg.content}
                      {msg.attachment && (
                        <div>
                          <a
                            href={msg.attachment}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="text-blue-500">Attachment</span>
                          </a>
                        </div>
                      )}
                      {msg.image && (
                        <img src={msg.image} alt="Uploaded" className="mt-2" />
                      )}
                    </span>
                    <Image
                      src={icon}
                      alt="User Avatar"
                      className={styles.avatarImage}
                      width={50}
                      height={50}
                      style={{ marginRight: "20px" }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="text-center mt-4">
              <span className="text-gray-500">Thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form
          onSubmit={handleSubmit}
          className={styles.inputBoxWrapper}
          autoComplete="off"
        >
          <div className="flex items-end p-2 space-x-2 bg-[#3F3F3F] rounded-md">
            <textarea
              ref={textAreaRef}
              value={input}
              onChange={handleInputChange}
              placeholder="Type a message..."
              className="flex-1 p-2 rounded-lg bg-[#3F3F3F] text-white resize-none"
              rows="1"
              style={{
                textAlign: "start",
                height: input
                  ? `${textAreaRef.current?.scrollHeight}px`
                  : "48px",
                outline: "none",
                maxHeight: "120px",
                overflowY: "auto",
              }}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            />

            <input
              type="file"
              id="file-input"
              className="hidden"
              onChange={handleFileChange}
            />

            <input
              type="file"
              id="image-input"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />

            <div className="flex space-x-3 items-center">
              <GrAttachment
                onClick={handleAttachmentClick}
                className="text-gray-300 cursor-pointer"
              />
              <span className="cursor-pointer">
                <Image
                  src={imgIcon}
                  width={20}
                  height={20}
                  onClick={handleImageClick}
                  alt="Image"
                />
              </span>
              <button type="submit" className="rounded-lg p-2 text-white">
                <Image src={sendIcon} alt="Send" width={30} height={30} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
