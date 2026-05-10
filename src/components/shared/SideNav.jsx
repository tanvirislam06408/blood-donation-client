
import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Avatar, AvatarFallback, AvatarImage, Button, Drawer } from "@heroui/react";
import { Droplet, LogOut, SquarePen } from "lucide-react";
import Link from "next/link";
import LogOUt from "./LogOUt";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function SideNav () {
    const navItems = [
        { icon: House, label: "Home", href: '/' },
        { icon: Droplet, label: "All Donors", href: '/all-donor' },
        { icon: Person, label: "Profile", href: '/profile' },
    ];

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    return (
        <Drawer>
            <Button variant="secondary">
                <Bars className="text-red-500" />

            </Button>
            <Drawer.Backdrop>
                <Drawer.Content placement="left">
                    <Drawer.Dialog>
                        <Drawer.CloseTrigger />
                        <Drawer.Header>
                            <Drawer.Heading>
                                <div className='flex gap-2 items-center mt-3 ' >
                                    <div className='h-9 w-9 justify-center rounded-xl gradient-primary items-center flex'>
                                        <Droplet className='h-5  w-5  text-white' fill='currentColor' />
                                    </div>
                                    <h1 className='text-xl font-bold tracking-tight'> Blood<span className='text-primary'>Bridge</span></h1>
                                </div>
                            </Drawer.Heading>
                        </Drawer.Header>
                        <Drawer.Body>
                            <nav className="flex flex-col gap-1">
                                <div>
                                    {navItems.map((item) => (
                                    <Link
                                        href={item.href}
                                        key={item.label}
                                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                                        type="button"
                                    >
                                        <item.icon className="size-5 text-muted" />
                                        {item.label}
                                    </Link>
                                ))}
                                </div>

                                <div className='flex flex-col'>
                                   
                                    {
                                        user ? (
                                            <div className='flex items-center'>
                                               
                                                <LogOUt />
                                            </div>
                                        ) : (
                                        <Link href={'/login'}><Button variant='danger-soft ' className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"><SquarePen /> Login</Button></Link>        
                                        )
                                    }
                                </div>
                            </nav>
                        </Drawer.Body>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    );
}