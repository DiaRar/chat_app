import { Button } from '@/src/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/components/ui/dialog';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { useEffect, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { Socket } from 'socket.io-client';
type User = {
  username: string;
  avatar: string;
};
export function DialogThingy(props: {
  setusr: Dispatch<SetStateAction<User>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  socket: Socket<any, any>;
}) {
  let avatar =
    'https://cdn.discordapp.com/attachments/881495394916919572/881495427782633226/unknown.png';
  let username = 'Default Username';
  const saveUser = () => {
    props.setusr({ username: username, avatar: avatar });
    props.socket.emit('join', { username: username, avatar: avatar });
    localStorage.setItem('username', username);
    localStorage.setItem('avatar', avatar);
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button id="profilbruh" variant="ghost" className="hidden">
          Edit profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="avatar" className="text-right">
              Avatar
            </Label>
            <Input
              id="avatar"
              onChange={(e) => (avatar = e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              onChange={(e) => (username = e.target.value)}
              id="username"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={saveUser}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
