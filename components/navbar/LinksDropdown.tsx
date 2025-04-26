import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {dropDownMenuLinks} from "@/utils/links";

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} className='flex gap-4 max-w-[100px]'>
            <LuAlignLeft className='w-6 h-6' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40" align='start' sideOffset={10}>
        {dropDownMenuLinks.map((link) => (
          <DropdownMenuItem key={link.name}>
                  <Link href={link.href}>
                    {link.name}
                  </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
        
    </DropdownMenu>
  )
}

export default LinksDropdown