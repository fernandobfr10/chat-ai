import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chat } from "@/components/Chat";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Chat />
    </div>
  );
}
