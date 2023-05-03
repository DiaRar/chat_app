import { Send } from 'lucide-react';
import { Button } from '@/src/components/ui/button';

export function SendButton() {
  return (
    <Button variant="outline" className="w-10 h-20  p-0">
      <Send className="h-4 w-4" />
    </Button>
  );
}
