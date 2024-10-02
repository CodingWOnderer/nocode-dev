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
