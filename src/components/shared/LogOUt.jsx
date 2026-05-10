'use client'
import { authClient } from '@/lib/auth.client';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const LogOUt = () => {
    const router = useRouter();

    const handleLogout = async () => {
        await authClient.signOut();
        router.refresh();
    }

    return <Button onClick={handleLogout} variant='danger'>Logout</Button>

};

export default LogOUt;