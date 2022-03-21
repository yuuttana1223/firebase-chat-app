import { getDatabase, set, ref, push } from "firebase/database";
import { app } from "src/firebase/config";

const db = getDatabase(app);
const messageListRef = ref(db, "messages");

export const createMessageData = (message: string, username: string) => {
  const newMessageRef = push(messageListRef);
  set(newMessageRef, {
    message,
    username,
  });
};
