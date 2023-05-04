import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/src/components/ui/avatar';
export function Message(props: any) {
  return (
    <div className="message">
      <Avatar className="mr-2">
        <AvatarImage src={props.avatar} />
        <AvatarFallback>LP</AvatarFallback>
      </Avatar>
      <div className="content">
        <div className="username">{props.username}</div>
        {props.children}
      </div>
    </div>
  );
}
