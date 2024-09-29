import { AddressForm } from "@/components/forms/profile/address-form";
import ProfileForms from "@/components/forms/profile/profile-form";
import { PasswordUpdateForm } from "@/components/forms/profile/profile-password-form";
import { SocialProfilesForm } from "@/components/forms/profile/social-profile";
import ProfileHeader from "@/components/profile-header";
import { Separator } from "@/components/ui/separator";
import React from "react";

const ProfilePage = () => {
    return (
        <div className="flex flex-col gap-8 md:gap-12">
            <ProfileHeader />
            <div className="px-5 pb-12 md:pb-16 lg:pb-24 max-w-6xl w-full mx-auto flex flex-col gap-6">
                <ProfileForms />
                <Separator />
                <PasswordUpdateForm />
                <Separator />
                <AddressForm />
                <Separator />
                <SocialProfilesForm />
            </div>
        </div>
    );
};

export default ProfilePage;
