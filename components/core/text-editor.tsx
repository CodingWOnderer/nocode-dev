import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import { ControllerRenderProps } from "react-hook-form";
import FroalaEditorComponent from "react-froala-wysiwyg";
import { useTheme } from "next-themes";
import { useImageUpload } from "@/hooks/api/use-image-upload";
import FroalaEditor from "react-froala-wysiwyg";
import { useRef } from "react";
import { FroalaOptions } from "froala-editor";
import { toast } from "sonner";

type FroalaEditorForm = {
    title: string;
    slug: string;
    date: Date | undefined;
    image: string | undefined;
    category: string;
    author: string;
    discription: string;
    content: string;
    userTags: string[];
};

interface FroalaTextEditorBlogSparkProps {
    field: ControllerRenderProps<FroalaEditorForm, "content">;
}

function FroalaTextEditorBlogSpark({ field }: FroalaTextEditorBlogSparkProps) {
    const { theme } = useTheme();
    const editorref = useRef<FroalaEditor>(null);
    const { UploadImage, setUploadProgress } = useImageUpload();


    const generateCustomId = (text: string) => {
        return text
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9\-]+/g, '')
            .replace(/^-+|-+$/g, '');
    };


    const updateHeadingsWithIds = (html: string) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        const headings = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach((heading) => {
            const headingElement = heading as HTMLElement;
            const content = headingElement.innerText.trim();
            if (content) {
                headingElement.id = generateCustomId(content);
            }
        });

        return tempDiv.innerHTML;
    };


    const config: Partial<FroalaOptions> = {
        apiKey: process.env.NEXT_PUBLIC_FROALA_EDITOR_KEY ?? "",
        toolbarInline: false,
        toolbarSticky: false,
        charCounterCount: false,
        tooltips: false,
        placeholderText: "Unveil your story...",
        toolbarButtons: [
            "bold",
            "italic",
            "underline",
            "fontSize",
            "alignLeft",
            "alignCenter",
            "alignRight",
            "alignJustify",
            "formatOL",
            "formatUL",
            "paragraphFormat",
            "insertLink",
            "insertImage",
            "insertVideo",
            "insertTable",
            "embedly",
            "insertFile",
            "fullscreen",
        ],
        quickInsertEnabled: false,
        theme: theme === "dark" ? "dark" : "",
        imageUpload: true,
        imageUploadMethod: "POST",
        events: {
            "image.beforeUpload": function (this, files: any) {
                if (files.length) {
                    try {
                        UploadImage(files[0], "BLOG_CONTENT", (data) => {
                            this.image.insert(
                                data.url,
                                false,
                                {
                                    name: data.url.match(/\/([^\/]+?)(?=\.[^.]+$)/)?.[1],
                                    id: data.url.match(/\/([^\/]+?)(?=\.[^.]+$)/)?.[1],
                                },
                                "",
                                this.image.get()
                            );
                        });
                    } catch (error) {
                        toast.error("Failed to upload image. Please try again.");
                    }
                    return false;
                }
                return false as boolean;
            },
            "blur": function () {
                const updatedHtml = updateHeadingsWithIds(this.html.get());
                this.html.set(updatedHtml);
            },
            "paste.after": function (this) {
                const updatedHtml = updateHeadingsWithIds(this.html.get());
                this.html.set(updatedHtml);
                return true;
            },
            "save.before": function (this, html: string) {
                const updatedHtml = updateHeadingsWithIds(html);
                this.html.set(updatedHtml);
                return true;
            }
        },
    };

    return (
        <FroalaEditorComponent
            ref={editorref}
            tag="textarea"
            model={field.value}
            onModelChange={field.onChange}
            config={config}
        />
    );
}

export default FroalaTextEditorBlogSpark;
