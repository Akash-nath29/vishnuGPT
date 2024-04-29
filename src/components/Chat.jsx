import React from "react";
import "./css/Chat.css";

const Chat = () => {
  return (
    <div
      className="chat flex flex-col items-center justify-end md:justify-center w-[100vw] h-[100vh] relative"
      id="chat"
    >
      <div className="inputs flex flex-row items-center justify-center">
        <input
          type="query"
          id="query"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 md:w-[80vh] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light absolute top-10"
          placeholder="Ask Lord Vishnu"
          required
        />
        <button
          type="submit"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 absolute top-[90px] w-80 md:w-auto"
          onClick={() => {
            let query = document.getElementById("query").value;
            const link = "http://127.0.0.1:80/api/";
            document.getElementById("response").value = "Loading...";
            fetch(link, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ prompt: query }),
            })
              .then((response) => response.json())
              .then((data) => {
                document.getElementById("response").value = data.response;
              });
          }}
        >
          Send
        </button>
      </div>
      <br />
      <br />
      <textarea
        name="response"
        id="response"
        className="bg-transparent border-white border-10 text-white text-lg p-5  absolute bottom-120 w-full text-center h-auto" disabled
      ></textarea>
      <br />
      <br />
    </div>
  );
};

export default Chat;
