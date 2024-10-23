import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    ArrowDownUp,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useState } from "react";
import { Comment } from "@/types/blog";
import { useAuthState } from "@/hooks/use-auth-state";
import { toast } from "sonner";

export function UserComments() {
    // const quantity = 3;

    // const [sortOption, setSortOption] = useState<"newest" | "oldest">("newest");
    // const [comments, setComments] = useState<Comment[]>([]);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [posting, setPosting] = useState(false);
    const [commentContent, setCommentContent] = useState("");
    const { user, isAuthenticated } = useAuthState();
    // const [isExpanded, setIsExpanded] = useState(false);
    // const displayedList = isExpanded ? comments : comments?.slice(0, quantity);

    // const toggleExpanded = () => {
    //     setIsExpanded(!isExpanded);
    // };

    {
        /** handle sort change */
    }
    // const handleSortChange = (value: string) => {
    //     const sortOption = value as "newest" | "oldest";

    //     if (sortOption === "newest" || sortOption === "oldest") {
    //         // setSortOption(sortOption);

    //         const sortedComments = [...comments].sort((a, b) => {
    //             if (sortOption === "newest") {
    //                 return b.createdAt.getTime() - a.createdAt.getTime();
    //             } else {
    //                 return a.createdAt.getTime() - b.createdAt.getTime();
    //             }
    //         });
    //         setComments(sortedComments);
    //     }
    // };

    {
        /** function to fetch comments */
    }

    {
        /** handle post comment */
    }
    async function handlePostComment() {
        if (!isAuthenticated || !user.username) {
            toast.error("You must be logged in to post a comment.");
            return;
        }

        if (commentContent.trim() === "") {
            toast.error("Comment content cannot be empty.");
            return;
        }

        // Regular expression to detect URLs in the comment content
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        if (urlRegex.test(commentContent)) {
            toast.error("Links are not allowed in comments.");
            return;
        }

        setPosting(true);
    }

    const handleKeyDown = (e: {
        ctrlKey: any;
        key: string;
        preventDefault: () => void;
    }) => {
        if (e.ctrlKey && e.key === "Enter") {
            e.preventDefault();
            handlePostComment();
        }

        if (e.key === "Escape" && showEmojiPicker) {
            setShowEmojiPicker(false);
        }

        if (e.ctrlKey && e.key === "e") {
            e.preventDefault();
            setShowEmojiPicker(!showEmojiPicker);
        }
    };

    const onEmojiClick = (e: { native: string }) => {
        setCommentContent((prev) => prev + e.native);
    };

    // const handleDeleteComment = async (commentId: string) => {
    //     try {
    //         if (!isAuthenticated || !user?.username) {
    //             toast.error("Action Forbidden");
    //             return;
    //         }

    //         // Call the deleteComment service
    //         //   toast.promise(
    //         //     onDeleteComment({ commentId, userId: user.id })
    //         //       .then(() =>
    //         //         setComments(comments.filter((comment) => comment.id !== commentId))
    //         //       ),
    //         //     {
    //         //       loading: 'Deleting...',
    //         //       success: () => "Comment deleted successfully!",
    //         //       error: "Failed to delete comment. Please try again.",
    //         //     }
    //         //   );
    //     } catch (error) {
    //         toast.error("Failed to delete comment. Please try again.");
    //     }
    // };

    return (
        <div className="grid gap-6 ">
            <div className="flex items-center max-w-6xl mx-auto justify-between w-full">
                <h2 className="text-[1.4rem]">Comments</h2>
                {/** Sorting options */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="shrink-0">
                            <ArrowDownUp className="w-4 h-4 mr-2" />
                            Sort by
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px]" align="end">
                        <DropdownMenuRadioGroup>
                            <DropdownMenuRadioItem value="newest">
                                Newest
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="oldest">
                                Oldest
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {!isAuthenticated && (
                <div className="flex gap-4">
                    <Avatar className="w-10 h-10 border">
                        <AvatarImage src={user?.userImage} alt={`@${user.username}`} />
                        <AvatarFallback>
                            {user?.username && user?.username.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>

                    <div className=" flex-grow relative">
                        <Textarea
                            value={commentContent}
                            disabled={posting}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setCommentContent(e.target.value)}
                            placeholder="Write your comment"
                        />
                        <Button
                            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                            className="absolute right-0 top-0 mt-2 mr-2"
                            variant="ghost"
                        >
                            😊
                        </Button>

                        {showEmojiPicker && (
                            <div className="absolute right-0 top-12 z-[99]">
                                <Picker
                                    data={data}
                                    onEmojiSelect={onEmojiClick}
                                    onClickOutside={() => setShowEmojiPicker(false)}
                                    theme="dark"
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                        )}
                    </div>



                </div>
            )}
        </div>
    );
}
