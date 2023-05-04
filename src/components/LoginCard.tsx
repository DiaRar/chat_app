import { Button } from '@/src/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';

export function LoginCard() {
  return (
    <Card className="w-[600px] ml-3 mr-3 customborder">
      <CardHeader>
        <CardTitle>Login / Sign Up</CardTitle>
        <CardDescription>Creaza un cont nou instant.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nume de utilizator</Label>
              <Input id="name" placeholder="Ex. Gigel" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Avatar</Label>
              <Input id="password" placeholder="Ex. un url cu o imagine" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Cancel</Button>
        <div>
          {/* <Button className="mr-3">Login</Button> */}
          <Button variant="outline">Enter</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
