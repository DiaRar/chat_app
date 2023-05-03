import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/src/components/ui/card';

import { Textarea } from '@/src/components/ui/textarea';
import { SendButton } from '@/src/components/SendButton';
import { Message } from './Message';
export function ChatCard() {
  return (
    <div className="h-lmao p-3">
      <Card className="h-full customover">
        <CardContent className="mt-3 h-lm2">
          <div className="h-full flex flex-col justify-start pt-3">
            <div className="bg-muted h-full rounded-md">
              <Message username="Stefan" avatar="">
                sdsdjasdjsjdasjdjasdjsjdjsadjasjdsjdjdjsdjsjdasAaaaadasjdnasdjksadnjksadnsajkdnsajdnsadkjasndkjsadnsakjdnsajkdnsajkdnsadjksandjsakdnaskjdnsadksadsjndjnksdnjasdnsaknjdsandjnksadknjsknjdknsajdknasdnsajdsajndknjanajksdknjasnajdsajsajj
                <br />
                sndasdsa ss
              </Message>
              <Message username="Stefan">cuaie</Message>
              <Message username="Stefan">cuaie</Message>
            </div>
          </div>
        </CardContent>
        <CardFooter className="relative">
          <Textarea placeholder="Scrie un mesaj..." />
          <SendButton />
        </CardFooter>
      </Card>
    </div>
  );
}
