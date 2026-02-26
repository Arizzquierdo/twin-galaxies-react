import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/messages");

const getAllMessages = () => {
  return get(dbRef);
};

const addMessage = (nick, content) => {
  return push(dbRef, {
    nick: nick,
    content: content
  });
};

const removeMessage = (key) => {
  const dbRefMessage = ref(db, `/messages/${key}`);
  return remove(dbRefMessage);
};

export default {
  getAllMessages,
  addMessage,
  removeMessage,
};