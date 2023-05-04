import { Send } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Textarea } from '@/src/components/ui/textarea';
import { Socket } from 'socket.io-client';
import { useState } from 'react';
type Message = {
  username: string;
  message: string;
  avatar: string;
};
export function SendArea(props: {
  socket: Socket<any, any>;
  user: { username: string; avatar: string };
}) {
  const [message, setMessage] = useState({} as Message);

  const click = () => {
    if (message.message === undefined || message.message === '') return;
    props.socket.emit('send_message', message);
    setMessage({} as Message);
    const textarea = document.querySelector(
      '#textareae'
    ) as HTMLTextAreaElement;
    textarea.value = '';
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setMes = (e: any) => {
    // if enter then send
    setMessage({
      username: props.user.username,
      message: e.target.value,
      avatar: props.user.avatar,
    });
  };
  return (
    <>
      <Textarea
        placeholder="Scrie un mesaj..."
        id="textareae"
        onChange={setMes}
        onKeyDown={(e) => {
          if (e.key === 'Enter') click();
        }}
      />
      <Button onClick={click} variant="outline" className="w-10 h-20  p-0">
        <Send className="h-4 w-4" />
      </Button>
    </>
  );
}
