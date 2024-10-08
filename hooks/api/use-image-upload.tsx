import { USER_IMAGE_KEYS_TYPES } from "@/utils";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useCallback, useState } from "react";

interface ImageUploadResponse {
    success: boolean;
    url: string;
    message: string;
}

interface UploadVariables {
    formData: FormData;
}

export const useImageUpload = () => {
    const [uploadProgress, setUploadProgress] = useState(0);

    const { mutate: uploadImageMutation, error: uploadError } = useMutation<
        ImageUploadResponse,
        AxiosError,
        UploadVariables
    >({
        mutationFn: async ({ formData }) => {
            const response = await axios.post("/api/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {
                    const progress = (progressEvent.progress ?? 0) * 100;
                    setUploadProgress(progress);
                },
            });
            return response.data;
        },
    });

    const UploadImage = useCallback((
        imageFile: File,
        imageStorage: USER_IMAGE_KEYS_TYPES,
        onSuccess?: (
            data: ImageUploadResponse,
            variables: UploadVariables,
            context: unknown
        ) => void
    ) => {
        const formData = new FormData();
        formData.append("image", imageFile);
        formData.append("typeOfStorage", imageStorage);

        uploadImageMutation(
            { formData },
            {
                onSuccess,
            }
        );
    }, [uploadImageMutation])

    return {
        UploadImage,
        uploadProgress,
        setUploadProgress,
        uploadError
    };
};
