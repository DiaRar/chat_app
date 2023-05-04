import { Card, CardContent, CardFooter } from '@/src/components/ui/card';
import { SendArea } from '@/src/components/SendArea';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { DialogThingy } from './DialogThingy';
import { Messages } from './Messages';

// Inlocuieste localhost cu ip-ul serverului pentru a putea folosi alte
// dispozitive pe site.
const socket = io('http://localhost:3001');

type User = {
  username: string;
  avatar: string;
};

export function ChatCard() {
  const [user, setUser] = useState({
    username: 'Default Username',
    avatar:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75bff394-4f86-45a8-a923-e26223aa74cb/de901o7-d61b3bfb-f1b1-453b-8268-9200130bbc65.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1YmZmMzk0LTRmODYtNDVhOC1hOTIzLWUyNjIyM2FhNzRjYlwvZGU5MDFvNy1kNjFiM2JmYi1mMWIxLTQ1M2ItODI2OC05MjAwMTMwYmJjNjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aEck9OnRf_XJzrEzZNvrGS2XpAlo2ixuxoAX5fgpNnw',
  } as User);
  useEffect(() => {
    const username = localStorage.getItem('username');
    const avatar = localStorage.getItem('avatar');
    if (username && avatar) {
      setUser({ username: username, avatar: avatar });
    }
  }, [setUser]);

  // console.log(user);
  return (
    <>
      <div className="h-lmao p-3">
        <Card className="h-full customover">
          <CardContent className="mt-3 h-lm2">
            <div className="h-full flex flex-col justify-start pt-3">
              <div className="bg-muted h-full rounded-md overflow-y-scroll flex customscroll">
                <Messages socket={socket} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="relative">
            <SendArea socket={socket} user={user} />
          </CardFooter>
        </Card>
      </div>
      <DialogThingy setusr={setUser} socket={socket} />
    </>
  );
}
