import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { PiLinktreeLogoBold, PiUserSquare } from "react-icons/pi";
import { LiaBlogSolid } from "react-icons/lia";
import { MdDashboard } from "react-icons/md";
import { SideItem } from "./sidebar-items";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { Search } from "./search-input";
import { UserProfileDropDown } from "./userDropdown";
import { FaBraille } from "react-icons/fa";
import Link from "next/link";

export const DashboardSide = () => {
    return (
        <aside
            className={cn(
                "invisible bg-background fixed inset-y-0 top-0 flex h-screen w-fit origin-top scale-[0.98] overflow-hidden opacity-0 transition-all duration-300 lg:visible lg:scale-100 lg:opacity-100"
            )}
        >
            <div className="flex w-72 flex-col gap-4 px-6 py-4">
                <div className="flex w-10">
                    <Link href={"/"} hrefLang={"en"}>
                        <PiLinktreeLogoBold className="mx-auto size-6" />
                    </Link>
                </div>
                <Search />
                <ScrollArea>
                    <div className=" space-y-1">
                        <SideItem
                            href={"/dashboard"}
                            label={"Dashboard"}
                            Icon={<MdDashboard className=" size-5" />}
                        />
                        <SideItem
                            href={"/dashboard/capconsgpt"}
                            label={"Capcons Gpt"}
                            Icon={<FaBraille className=" size-5" />}
                        />
                        <SideItem
                            href={"/dashboard/published"}
                            label={"Published Blogs"}
                            Icon={<LiaBlogSolid className=" size-5" />}
                        />
                        <SideItem
                            href={"/dashboard/posts"}
                            label={"Posts"}
                            Icon={<MdOutlineLocalPostOffice className=" size-5" />}
                        />
                        <SideItem
                            href={"/dashboard/profile"}
                            label={"Profile"}
                            Icon={<PiUserSquare className=" size-5" />}
                        />
                    </div>
                    <ScrollBar orientation="vertical" />
                </ScrollArea>
                <div className=" mt-auto">
                    <UserProfileDropDown />
                </div>
            </div>
        </aside>
    );
};
