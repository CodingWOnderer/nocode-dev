"use client"
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export const SetupModal = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    const navigateBack = () => router.back();

    return (
        <Dialog
            defaultOpen={true}
            onOpenChange={(open) => {
                if (!open) {
                    navigateBack();
                }
            }}
        >
            <DialogContent className=" max-w-full w-full h-full max-h-dvh rounded-non sm:rounded-none">
                <DialogHeader>
                    <DialogTitle>Currently Live</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};
