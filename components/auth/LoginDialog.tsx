"use client";
import React from 'react'
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import useLoginDialog from '@/hooks/use-login-dialog';
import useRegisterDialog from '@/hooks/use-register-dialog';
import { loginSchema } from '@/validation/auth.validation';

const LoginDialog = () => {

    const { open, onClose } = useLoginDialog();
    const { onOpen  } = useRegisterDialog()
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        console.log(values);
    }

    const handleRegisterOpen = () => {
        onClose();
        onOpen();
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className='sm:max-w-[425px] p-8'>
                <DialogHeader>
                    <DialogTitle>
                        Sign in to your account
                    </DialogTitle>
                    <DialogDescription>
                        Enter your email and password to login.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>

                        <FormField name='email' control={form.control} render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='mail@example.com' type='email' className='!h-10' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField name='password' control={form.control} render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='********' type='password' className='!h-10' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <Button size="lg" className='w-full' type="submit" >Login</Button>

                    </form>

                    <div className="mt-2 flex items-center justify-center">
                        <p className='text-sm text-muted-foreground'>
                            Don't have an account?{" "}
                            <button onClick={handleRegisterOpen} className='!text-primary'>
                                Register
                            </button>
                        </p>
                    </div>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog