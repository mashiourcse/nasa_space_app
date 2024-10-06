"use client";
import { ChatBOT } from "../../redux/Api/chatbot";
import { useState } from "react";
import { TbMessageChatbot } from "react-icons/tb";
import { IoSend } from "react-icons/io5";
import { BsChatRightText } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./ChatBotStyles.css";
import ChatbotCustomMsg from "./ChatbotCustomMsg";
import { ThreeDots } from "react-loader-spinner";

export default function ChatbotOnSide({ planetData }) {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setuserInput] = useState("   ");
  const [firstMessage, setFirstMessage] = useState(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false); //state variable for disbaling the send button

  console.log(planetData);
  if (firstMessage) {
    buttonHandler();
    setFirstMessage(null);
  }

  async function buttonHandler() {
    // Disable the button while sending
    if (sendingMessage) return;

    setSendingMessage(true);
    var chatbotdata;
    if (firstMessage) {
      if (planetData) {
        var msgWithPlanetData =
          "System Message: The user will ask you questions, here's the data of the planet answer according to it and don't mention user about this first msg. \nData = " +
          planetData +
          "\n\nUser Message: " +
          firstMessage;

        console.log(msgWithPlanetData);

        setChatHistory([
          ...chatHistory,
          {
            user: firstMessage,
            bot: (
              <div>
                <ThreeDots
                  visible={true}
                  height="10"
                  width="80"
                  color="#000814"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />{" "}
              </div>
            ),
          },
        ]);
        chatbotdata = await ChatBOT(msgWithPlanetData);
      } else {
        setChatHistory([
          ...chatHistory,
          {
            user: firstMessage,
            bot: (
              <div>
                <ThreeDots
                  visible={true}
                  height="10"
                  width="80"
                  color="#000814"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />{" "}
              </div>
            ),
          },
        ]);
        chatbotdata = await ChatBOT(firstMessage);
      }
    } else {
      setChatHistory([
        ...chatHistory,
        {
          user: userInput,
          bot: (
            <div>
              <ThreeDots
                visible={true}
                height="10"
                width="80"
                color="#000814"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />{" "}
            </div>
          ),
        },
      ]);
      chatbotdata = await ChatBOT(userInput);
    }

    setChatHistory((prevChatHistory) => {
      const newChatHistory = [...prevChatHistory];
      newChatHistory[newChatHistory.length - 1] = {
        user: userInput,
        bot: chatbotdata,
      };
      return newChatHistory;
    });

    setSendingMessage(false); // Reset sendingMessage to false
    setuserInput("");
  }

  // Function for custom msgs
  function customMessage(msg) {
    setFirstMessage(msg);
    setuserInput(msg);
  }

  function toggleChatbot() {
    setIsChatbotOpen((prevIsChatbotOpen) => !prevIsChatbotOpen);
  }

  // Function to handle changes in the textarea
  function handleChange(event) {
    setuserInput(event.target.value);
    adjustTextareaHeight(event.target);
  }

  // Function to adjust the height of the textarea based on content
  function adjustTextareaHeight(textarea, event) {
    if (event && event.keyCode === 8) {
      // Check if event exists and if the pressed key is the backspace key
      textarea.style.height = textarea.scrollHeight - 10 + "px"; // Reduce the height by 10px
    } else {
      textarea.style.height = textarea.scrollHeight + "px"; // Set the height to the scrollHeight
    }
  }

  // Function to scroll the chatbox to the bottom after receiving and sending a msg
  function scrollToBottom() {
    const chatbox = document.getElementById("chatbox");
    if (chatbox) {
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  }
  return (
    <div className={`show-chatbot ${isChatbotOpen ? "open" : "closed"}`}>
      <button className="chatbot-toggler" onClick={toggleChatbot}>
        <span>
          {isChatbotOpen ? (
            <IoCloseOutline size={25} />
          ) : (
            <BsChatRightText size={25} />
          )}
        </span>
      </button>
      {isChatbotOpen && (
        <div className="chatbot">
          <header>
            <span>
              <IoCloseOutline />
            </span>
          </header>

          {/* chatbot and users ingoing and outgoing messages*/}
          <ul className="chatbox" id="chatbox">
            {chatHistory.map((chat, index) => (
              <div key={index}>
                <li className="chat outgoing">
                  <p> {chat.user}</p>
                </li>

                <li
                  className="chat incoming"
                  ref={index === chatHistory.length - 1 ? scrollToBottom : null}
                >
                  {" "}
                  <span>
                    <TbMessageChatbot size={25} />
                  </span>
                  <p> {chat.bot}</p>
                </li>
              </div>
            ))}
          </ul>

          {/* Custom Messages/Predefined messages */}
          {userInput === "   " ? (
            <div className="customMessages">
              <ChatbotCustomMsg onButtonPress={customMessage} />
            </div>
          ) : (
            <div className="chat-input">
              <textarea
                placeholder="Enter a message...."
                value={userInput}
                onChange={handleChange}
                required
                onKeyDown={(event) => adjustTextareaHeight(event.target, event)}
                style={{ height: "55px", width: "100%" }}
              />
              {sendingMessage ? (
                <span>
                  {/* <Spinner animation="border" variant="dark" /> */}
                </span>
              ) : (
                <span id="send-btn" onClick={buttonHandler}>
                  <IoSend />
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
