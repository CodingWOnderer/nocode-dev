import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import { ControllerRenderProps } from "react-hook-form";
import FroalaEditorComponent from "react-froala-wysiwyg";
import { useTheme } from "next-themes";

type FroalaEditorForm = {
    title: string;
    slug: string;
    date: Date | undefined;
    image: string | undefined;
    discription: string;
    content: string;
    userTags: string[];
};

interface FroalaTextEditorBlogSparkProps {
    field: ControllerRenderProps<FroalaEditorForm, "content">;
}

function FroalaTextEditorBlogSpark({ field }: FroalaTextEditorBlogSparkProps) {
    const { theme } = useTheme()

    const config = {
        key: process.env.NEXT_PUBLIC_FROALA_EDITOR_KEY,
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
            "quote",
            "insertLink",
            "insertImage",
            "insertVideo",
            "insertTable",
            "embedly",
            "insertFile",
            "fullscreen",
            "getPDF",
            "html",
        ],
        quickInsertEnabled: false,
        theme: theme === "dark" ? "dark" : "",
    };

    return (
        <FroalaEditorComponent
            tag="textarea"
            model={field.value}
            onModelChange={field.onChange}
            config={config}
        />
    );
}

export default FroalaTextEditorBlogSpark;
