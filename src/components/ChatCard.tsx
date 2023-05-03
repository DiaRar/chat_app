import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/src/components/ui/card';

import { Textarea } from '@/src/components/ui/textarea';
import { SendButton } from '@/src/components/SendButton';
import { Skeleton } from '@/src/components/ui/skeleton';

export function ChatCard() {
  return (
    <div className="h-lmao p-3">
      <Card className="h-full customover">
        <CardContent className="mt-3 h-lm2">
          <div className="h-full flex flex-col justify-start">
            <div className="bg-muted h-full rounded-md"></div>
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
