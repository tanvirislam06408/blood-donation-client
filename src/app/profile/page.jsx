'use client'
import { authClient } from '@/lib/auth.client';
import { CircleDollar } from '@gravity-ui/icons';
import { Card } from '@heroui/react';
import { Link } from 'lucide-react';

const ProfilePage =  () => {
    const {data} = authClient.useSession();
    const user =data?.user;
    

    return (
        <div className='h-[70vh]'>
               <Card className="w-[400px]">
      <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" />
      <Card.Header>
        <Card.Title>Become an Acme Creator!</Card.Title>
        <Card.Description>
          Visit the Acme Creator Hub to sign up today and start earning credits from your fans and
          followers.
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
        </div>
    );
};

export default ProfilePage;