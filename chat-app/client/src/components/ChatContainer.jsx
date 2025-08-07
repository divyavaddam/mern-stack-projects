import React, { useRef, useEffect, useContext, useState } from "react";
import assets, { messagesDummyData } from "../assets/assets";
import { formatMessageTime } from "../lib/utils";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

const ChatContainer = () => {
  const { messages, selectedUser, setSelectedUser, sendMessage, getMessages } =
    useContext(ChatContext);
  const { authUser, onlineUsers } = useContext(AuthContext);
  const scrollEnd = useRef();

  const [input, setInput] = useState("");

  // HANDLE SENDING A MESSAGE
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return null;
    await sendMessage({ text: input.trim() });
    setInput("");
  };

  // HANDLE SENDING AN IMAGE
  const handleSendImage = async (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      toast.error("Select an image file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = async () => {
      await sendMessage({ image: reader.result });
      e.target.value = "";
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser._id);
    }
  }, [selectedUser]);

  useEffect(() => {
    if (scrollEnd.current && messages) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return selectedUser ? (
    <div className="h-full overflow-scroll relative backdrop-blur-lg">
      {/* ---------- Header ----------*/}
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img
          src={selectedUser.profilePic || assets.avatar_icon}
          alt="Profile Picture"
          className="w-8 rounded-full"
        />
        <p className="flex-1 text-lg text-white flex items-center gap-2">
          {selectedUser.fullName}
          {onlineUsers.includes(selectedUser._id) && (
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
          )}
        </p>
        <img
          src={assets.arrow_icon}
          alt="Arrow Icon"
          className="md:hidden max-w-7"
          onClick={() => setSelectedUser(null)}
        />
        <img
          src={assets.help_icon}
          alt="Help Icon"
          className="max-md:hidden max-w-5"
        />
      </div>
      {/* ------------ Chat Area -----------*/}
      <div className="flex flex-col items-center h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
        {messages.map((msg, index) => {
          const isOwnMessage = msg.senderId === authUser._id;
          return (
            <div
              key={index}
              className={`w-full flex mb-4 ${
                isOwnMessage ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex flex-col ${
                  isOwnMessage ? "items-end" : "items-start"
                }`}
              >
                {/* ✅ 6. Conditionally render image or text */}
                {msg.image ? (
                  <img
                    src={msg.image}
                    alt="Image"
                    className="max-w-[250px] border border-gray-600 rounded-lg"
                  />
                ) : (
                  // ✅ 7. Style message bubble differently for sender and receiver
                  <p
                    className={`text-sm px-4 py-2 rounded-xl break-words ${
                      isOwnMessage
                        ? "bg-gray-200 text-black rounded-br-none"
                        : "bg-gray-200 text-black rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </p>
                )}
                {/* ✅ 8. Show time below message */}
                <p className="text-xs text-gray-400 mt-1">
                  {formatMessageTime(msg.createdAt)}
                </p>
              </div>
            </div>
          );
        })}
        <div ref={scrollEnd}></div>
      </div>

      {/*--------BOTTOM AREA-------*/}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3">
        <div className="flex-1 flex items-center bg-gray-100/12 px-3 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyDown={(e) => (e.key === "Enter" ? handleSendMessage(e) : null)}
            type="text"
            placeholder="Send a message"
            className="flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400"
          />
          <input
            onChange={handleSendImage}
            type="file"
            id="image"
            accept="image/png, image/jpeg"
            hidden
          />
          <label htmlFor="image">
            <img src={assets.gallery_icon} alt="" />
          </label>
        </div>
        <img
          src={assets.send_button}
          alt=""
          className="w-7 cursor-pointer"
          onClick={handleSendMessage}
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <img src={assets.logo_icon} alt="Logo Icon" className="max-w-16" />
      <p className="text-lg font-medium text-white">Chat anytime, anywhere</p>
    </div>
  );
};

export default ChatContainer;
