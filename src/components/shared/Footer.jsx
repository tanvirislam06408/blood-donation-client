import Link from "next/link";
import { Droplet, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-gray-200 bg-red-50/40">

            <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4">

                {/* logo */}
                <div className="md:col-span-1">
                    <Link href="/" className="mb-4 flex items-center gap-2">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500">
                            <Droplet
                                className="h-5 w-5 text-white"
                                fill="currentColor"
                            />
                        </div>

                        <h2 className="text-2xl font-bold">
                            Blood
                            <span className="text-red-500">
                                Bridge
                            </span>
                        </h2>

                    </Link>

                    <p className="text-sm leading-relaxed text-gray-500">
                        Connecting blood donors with people in urgent need.
                        Together we can save lives and build a stronger community.
                    </p>
                </div>

                {/* about */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold">
                        About
                    </h3>

                    <ul className="space-y-3 text-sm text-gray-500">
                        <li>
                            <Link href="/">
                                Our Mission
                            </Link>
                        </li>

                        <li>
                            <Link href="/">
                                How It Works
                            </Link>
                        </li>

                        <li>
                            <Link href="/">
                                Become a Donor
                            </Link>
                        </li>

                        <li>
                            <Link href="/">
                                Partners
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* contact */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold">
                        Contact
                    </h3>

                    <ul className="space-y-3 text-sm text-gray-500">

                        <li className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-red-500" />
                            hello@bloodbridge.org
                        </li>

                        <li className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-red-500" />
                            +1 (800) 555-LIFE
                        </li>

                        <li className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-red-500" />
                            Worldwide
                        </li>

                    </ul>
                </div>

                {/* social */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold">
                        Follow Us
                    </h3>

                    <div className="flex items-center gap-3">
                        {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
                            <Link
                                key={i}
                                href="/"
                                className="
        flex h-10 w-10 items-center justify-center
        rounded-full border border-gray-200 bg-white
        transition-all hover:bg-red-500 hover:text-white
      "
                            >
                                <Icon className="h-4 w-4" />
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

            {/* bottom */}
            <div className="border-t border-gray-200 py-5 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} BloodBridge. Every drop counts ❤️
            </div>

        </footer>
    );
};

export default Footer;