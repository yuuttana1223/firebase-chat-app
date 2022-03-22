import {
  getDatabase,
  set,
  ref,
  push,
  query,
  limitToLast,
  orderByKey,
} from "firebase/database";
import { app } from "src/firebase/config";

const db = getDatabase(app);
const messageListRef = ref(db, "messages");

export const messagesQuery = query(
  messageListRef,
  orderByKey(),
  limitToLast(3)
);

export const createMessageData = (body: string, username: string) => {
  const newMessageRef = push(messageListRef);
  set(newMessageRef, {
    body,
    username,
  });
};
