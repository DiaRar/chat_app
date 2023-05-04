import { Message } from './Message';
import { Socket } from 'socket.io-client';
import { useEffect, useState } from 'react';
type Message = {
  username: string;
  message: string;
  avatar: string;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Messages(props: { socket: Socket<any, any> }) {
  const [messages, setMessages] = useState([] as Message[]);
  useEffect(() => {
    props.socket.on('receive_message', (data: Message) => {
      setMessages([
        ...messages,
        {
          username: data.username,
          message: data.message,
          avatar: data.avatar,
        },
      ]);
    });
    // console.log(messages.length);
    props.socket.on('messages', (messages: Message[]) => {
      setMessages(messages);
    });
    return () => {
      props.socket.off('receive_message');
    };
  }, [messages, props.socket]);

  return (
    <>
      {messages
        .slice(0)
        .reverse()
        .map((message) => {
          return (
            <Message username={message.username} avatar={message.avatar}>
              {message.message}
            </Message>
          );
        })}
    </>
  );
}
