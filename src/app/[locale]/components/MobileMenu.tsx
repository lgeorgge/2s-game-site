"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function MobileMenu({
  title,
  items,
}: {
  title: string;
  items: {
    href: string;
    label: string;
  }[];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"sm"} variant={"outline"} className="border-white/40">
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-primary text-white border-r border-white/20"
      >
        <SheetHeader>
          <SheetTitle className="text-white font-black">{title}</SheetTitle>
        </SheetHeader>
        <div className="mt-8 gap-3 flex flex-col">
          {items.map((I) => (
            <Button
              asChild
              key={I.href}
              variant={"secondary"}
              className="justify-start font-bold"
            >
              <Link href={I.href}>{I.label}</Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
