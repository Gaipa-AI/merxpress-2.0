'use client'
import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";


export function SearchBar({ className }: { className?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchTerm.trim();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };
  

  return (
    <form onSubmit={handleSearch} className={cn("flex items-center mb-4", className)}>
      <Input
        type="text"
        placeholder="Search..."
        //value={searchTerm}
        //onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit" className="ml-2">
        <Search size={16} />
      </Button>
    </form>
  );
};