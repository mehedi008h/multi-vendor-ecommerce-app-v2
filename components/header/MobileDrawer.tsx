import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";

const MobileDrawer = () => {
    return (
        <div className="xl:hidden lg:hidden block">
            <Drawer>
                <DrawerTrigger>
                    <RiMenu2Fill size={30} />
                </DrawerTrigger>
                <DrawerContent>
                    <div className="h-[calc(100vh-10vh)]"></div>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default MobileDrawer;
