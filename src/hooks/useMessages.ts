import { onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { messagesQuery } from "src/firebase/database";
import { Message } from "src/types/message";

type MessagesState = {
  messages:
    | {
        key: string;
        message: Message;
      }[]
    | null;
  isLoading: boolean;
  isError: boolean;
};

export const useMessages = () => {
  const [messageState, setMessageState] = useState<MessagesState>({
    messages: [],
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    try {
      setMessageState((prevMessageState) => ({
        ...prevMessageState,
        isLoading: true,
      }));
      onValue(messagesQuery, (snapshot) => {
        const messages: {
          [key: string]: Message;
        } = snapshot.val();

        if (messages === null) {
          setMessageState((prevMessageState) => ({
            ...prevMessageState,
            isLoading: false,
          }));
          return;
        }

        const entries = Object.entries(messages);
        const newMessages = entries.map((entry) => {
          return {
            key: entry[0],
            message: entry[1],
          };
        });
        setMessageState((prevMessageState) => ({
          ...prevMessageState,
          messages: newMessages,
          isLoading: false,
        }));
      });
    } catch (error) {
      setMessageState((prevMessageState) => ({
        ...prevMessageState,
        isLoading: false,
        isError: true,
      }));
    }
  }, []);

  return { ...messageState };
};
