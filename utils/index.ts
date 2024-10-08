import { CapconSAageResponseType } from "@/config/assistant-config";

/**
 * @description function to convert file to base64
 *
 * @param file
 * @returns
 */
export async function FileTobase64(
    file: File
): Promise<{ image: string | ArrayBuffer | null; name: string } | null> {
    return new Promise<{
        image: string | ArrayBuffer | null;
        name: string;
    } | null>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve({ image: reader.result, name: file.name });
        reader.onerror = reject;
    });
}

/**
 * @description function to convert base64 to File
 *
 * @param dataUrl
 * @param fileName
 * @returns File
 */
export async function base64ToFile(
    dataUrl: string,
    fileName: string
): Promise<File> {
    const res = await (await fetch(dataUrl)).blob();
    return new File([res], fileName, { type: "image/png" });
}

export function generateRandomIntegerInRange() {
    const tailwindColors = [
        "red",
        "blue",
        "green",
        "violet",
        "purple",
        "yello",
        "amber",
        "pink",
        "rose",
        "indigo",
        "orange",
        "lime",
        "teal",
        "sky",
        "Fuchsia",
    ];
    const getRandomColor = tailwindColors[Math.floor(Math.random() * ((tailwindColors.length - 1) - 0 + 1)) + 0];

    return `bg-${getRandomColor}-500/10 text-${getRandomColor}-500 hover:bg-${getRandomColor}-500/30 cursor-pointer transition-all duration-200 border-${getRandomColor}-500`;
}



export function generateRandomId(length = 24) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';

    for (let i = 0; i < length; i++) {
        // Append a random character from the characters string
        id += characters.charAt(Math.floor(Math.random() * characters.length));

        // Add a hyphen after every 8 characters (for example, to create segments)
        if ((i + 1) % 8 === 0 && i < length - 1) {
            id += '-';
        }
    }

    return id;
}


export const USER_IMAGE_KEYS = {
    PROFILE: "---Capcons--profile---",
    BLOG_HEADER: "---Capcons--blog-header---",
    BLOG_CONTENT: "---Capcons--blog-content---",
};

export type USER_IMAGE_KEYS_TYPES = keyof typeof USER_IMAGE_KEYS;

export interface UserProfile {
    firstname: string | null;
    lastname: string | null;
    age: string | null;
    email: string | null;
    password: string | null;
    profile_pic: string | null;
    interests: string[] | null;
    social: {
        linkedin: string | null;
        facebook: string | null;
        twitter: string | null;
    } | null;
    location: {
        state: string | null;
        city: string | null;
        country: string | null;
        address: string | null;
        pincode: string | null;
    } | null;
}


export function parseJsonString(input: string) {
    const cleanedString = input.replace(/```json|```/g, '').trim();

    try {
        const jsonObject = JSON.parse(cleanedString);
        return jsonObject;
    } catch (error) {
        return null;
    }
}

