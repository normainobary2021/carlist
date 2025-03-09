"use client"

import Link from 'next/link';
import React from 'react'
import Logo from './logo'
import { Input } from './ui/input'
import { Plus, Search } from 'lucide-react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import useRegisterDialog from '@/hooks/use-register-dialog';
import useLoginDialog from '@/hooks/use-login-dialog';

const NavBar = () => {

    const { onOpen: onRegisterOpen } = useRegisterDialog();

    const { onOpen: onLoginOpen } = useLoginDialog();

    const [searchKeyword, setSearchKeyword] = React.useState("");

    return (
        <header className='w-full px-3 md:px-0 bg-primary sticky top-0 align-top z-10 h-14' style={{ boxShadow: "1px 1px 4px #50727d66" }}>
            <nav className='flex items-center h-full max-w-7xl mx-auto'>
                <Logo />

                <ul className='hidden lg:flex flex-1 items-center justify-center space-x-6 mx-9 text-white/80 '>
                    <li className='flex-[0.6] hidden md:flex'>
                        <div className='w-full max-w-[320px] h-10 bg-white rounded-lg relative'>
                            <form>
                                <div className="flex items-center justify-between">
                                    <Input type='search' name='keyword' autoComplete='off' placeholder='Type your search here' value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} className='flex-1 !shadow-none h-10 text-black !ring-0 !border-0' />
                                    <Search className='w-5 h-5 mr-2 text-gray-600' />
                                </div>
                            </form>
                        </div>
                    </li>
                    <li><Link href='/' className='text-sm font-medium'>Home</Link></li>
                    <li><Link href='/' className='text-sm font-medium'>Services & Repair</Link></li>
                    <li><Link href='/' className='text-sm font-medium'>Pricing</Link></li>
                </ul>

                <div className='ml-auto flex items-center space-x-4'>
                    <div className='flex items-center space-x-2'>
                        <button onClick={onLoginOpen} className='text-sm font-extralight text-white'>Sign in</button>
                        <Separator orientation='vertical' className='h-3 text-white' />
                        <button className='text-sm font-extralight text-white' onClick={onRegisterOpen}>Register</button>
                    </div>
                    <Button size="default" className='!bg-[#fea03c] !px-5 !h-10'>
                        <Plus />
                        Sell Car
                    </Button>
                </div>

            </nav>
        </header>
    )
}

export default NavBar