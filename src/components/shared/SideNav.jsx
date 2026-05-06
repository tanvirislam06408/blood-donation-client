
import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { Droplet } from "lucide-react";
import Link from "next/link";

export function SideNav() {
    const navItems = [
        { icon: House, label: "Home", href: '/' },
        { icon: Droplet, label: "All Donors", href: '/all-donor' },
        { icon: Person, label: "Profile", href: '/profile' },
    ];

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
                            </nav>
                        </Drawer.Body>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    );
}