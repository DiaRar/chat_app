import { ChatCard } from '@/src/components/ChatCard';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
} from '@/src/components/ui/context-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/src/components/ui/sheet';
import { Label } from '@/src/components/ui/label';
import { Input } from '@/src/components/ui/input';
export function HomePage() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <ChatCard />
      </ContextMenuTrigger>
      <Sheet>
        <SheetTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Change Avatar</ContextMenuItem>
          </ContextMenuContent>
        </SheetTrigger>
        <SheetContent position="right" size="sm">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Bruh" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="SuKooder" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>bruh</SheetFooter>
        </SheetContent>
      </Sheet>
    </ContextMenu>
  );
}
