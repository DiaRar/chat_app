import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/src/components/ui/avatar';
export function Message(props: any) {
  return (
    <div className="message">
      <Avatar className="mr-2">
        <AvatarImage
          src="https://static.wikia.nocookie.net/ba0628fe-3bc1-42c3-9c0c-aa91ba24f03c/scale-to-width/370"
          alt="@shadcn"
        />
        <AvatarFallback>PH</AvatarFallback>
      </Avatar>
      <div className="content">
        <div className="username">{props.username}</div>
        {props.children}
      </div>
    </div>
  );
}
