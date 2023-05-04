import { ChatCard } from '@/src/components/ChatCard';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from '@/src/components/ui/context-menu';
export function HomePage() {
  const click = () => {
    const elem = document.querySelector('#profilbruh') as HTMLElement;
    elem.click();
  };
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <ChatCard />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={click}>Edit Profile</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
