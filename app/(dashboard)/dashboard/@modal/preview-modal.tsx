import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type PreviewModalProps = React.PropsWithChildren<{
    slug?: string;
}>;

export const PreviewModal = ({ slug, children }: PreviewModalProps) => {
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
            <DialogContent className=" w-full max-h-[40rem]">
                <DialogHeader>
                    <DialogTitle>Currently Live</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <ScrollArea className=" h-[30rem]">
                    {children}
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};
