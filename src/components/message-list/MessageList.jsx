import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';
import MessageService from "../../services/message.service";
import "./MessageList.css";

function MessageList() {
  const [messages, setMessages] = useState([]);
  const refForm = useRef();

  const getAllMessages = () => {
    MessageService.getAllMessages()
      .then((items) => {
        let allMessages = [];
        items.forEach(item => {
          const key = item.key;
          const data = item.val();
          allMessages.push({
            key: key,
            nick: data.nick,
            content: data.content
          });
        });
        setMessages([...allMessages]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const removeMessage = (key) => {
    MessageService.removeMessage(key).then((res) => {
      getAllMessages();
    });
  }

  const addMessage = (e) => {
    e.preventDefault();
    const nick = e.target.nick.value;
    const content = e.target.content.value;
    MessageService.addMessage(nick, content).then((res) => {
      refForm.current.reset();
      setMessages(oldValues => [...oldValues, { key: res.key, nick, content }])
    })
  }

  useEffect(() => {
    getAllMessages();
  }, []);

  return (
    <>
      <div className="message-list-main-container">
        <div className="message-form-container">
          <form id="message-form" onSubmit={addMessage} ref={refForm}>
            <input className="rounded-input" type="text" name="nick" placeholder="nick"/>
            <input className="rounded-input" type="text" name="content" placeholder="content"/>
            <input className="rounded-input" type="submit" value="Add Message"/>
          </form>
        </div>

        <div className="message-list">
          {messages.map(b =>
            <div className="message-item" key={b.key}>
              <p>[{b.nick}]: {b.content}</p>
              <FaRegTrashAlt className="delete-message" onClick={() => removeMessage(b.key)}/>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MessageList;