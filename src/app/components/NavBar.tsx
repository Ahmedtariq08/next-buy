import Link from "next/link";
import { Menu } from "./Menu";
import Image from "next/image";

export const NavBar = () => {
    return (
        <div className="h-20 px-4 md:px-4 lg:px-16 xl:px-32 2xl:px-64 relative">
            <div className="h-full flex items-center justify-between">
                {/* MOBILE */}
                <Link href={"/"}>
                    <div className="text-2xl tracking-wide">NextBuy</div>
                </Link>
                <Menu />
            </div>
            {/* BIGGER SCREENS */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* LEFT */}
                <div className="w-1/3"></div>
                <Link href={"/"}>
                    <Image src="/logo.png" alt="" width={24} height={24} />
                    <div className="text-2xl tracking-wide">NextBuy</div>
                </Link>
                {/* RIGHT */}
                <div className="w-2/3"></div>
            </div>
        </div>
    );
};
