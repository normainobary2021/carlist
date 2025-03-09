"use client";
import React from 'react'
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signupSchema } from '@/validation/auth.validation';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import useRegisterDialog from '@/hooks/use-register-dialog';
import useLoginDialog from '@/hooks/use-login-dialog';

const RegisterDialog = () => {

    const { open, onClose } = useRegisterDialog();
    const { onOpen } = useLoginDialog();

    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            shopName: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof signupSchema>) => {
        console.log(values);
    }

    const handleLoginOpen = () => {
        onClose();
        onOpen();
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className='sm:max-w-[425px] p-8'>
                <DialogHeader>
                    <DialogTitle>
                        Create an account
                    </DialogTitle>
                    <DialogDescription>
                        Enter your details below to register for an account.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
                        <FormField name='name' control={form.control} render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='Norman Aine' className='!h-10' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField name='email' control={form.control} render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='mail@example.com' type='email' className='!h-10' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField name='shopName' control={form.control} render={({ field }) => (
                            <FormItem>
                                <FormLabel>Shop Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='Normainobary Inc.' className='!h-10' />
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

                        <Button size="lg" className='w-full' type="submit" >Register</Button>

                    </form>

                    <div className="mt-2 flex items-center justify-center">
                        <p className='text-sm text-muted-foreground'>
                            Already have an account?{" "}
                            <button onClick={handleLoginOpen} className='!text-primary'>
                                Sign in
                            </button>
                        </p>
                    </div>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default RegisterDialog