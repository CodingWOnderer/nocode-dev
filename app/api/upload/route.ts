import { Storage } from "@google-cloud/storage";
import sharp from "sharp";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
import { USER_IMAGE_KEYS, USER_IMAGE_KEYS_TYPES } from "@/utils";

interface File extends globalThis.File {
    arrayBuffer: () => Promise<ArrayBuffer>;
}

const RandomNameGenerator = (IMAGE_KEY: USER_IMAGE_KEYS_TYPES) => {
    return `${USER_IMAGE_KEYS[IMAGE_KEY]}${nanoid()}.webp`;
};

const ImageToWebp = async (image: string | Buffer | ArrayBuffer) => {
    return await sharp(image, { animated: false }).webp().toBuffer();
};

export const POST = async (req: Request) => {
    const data = await req.formData();
    const file = data.get("image") as File | null;
    const typeOfImage = data.get("typeOfStorage") as USER_IMAGE_KEYS_TYPES;

    if (!file || typeof file === "string") {
        throw new Error("Image file not found");
    }

    const bytes = await file.arrayBuffer();
    const imageToWebpFile = await ImageToWebp(bytes);

    const storage = new Storage({
        projectId: "capcons-analytics-private-ltd",
        keyFilename: "./apikey.json",
    });

    const bucket = storage.bucket("capcons.com");

    const ImageGeneratedName = RandomNameGenerator(typeOfImage);

    await new Promise<void>((resolve, reject) => {
        const blob = bucket.file(`CapconsSage/${ImageGeneratedName}`);

        const blobstream = blob.createWriteStream({
            resumable: false,
            gzip: true,
        });

        blobstream.on("error", (err) => reject(err)).on("finish", () => resolve());

        blobstream.end(imageToWebpFile);
    });

    return new NextResponse(
        JSON.stringify({
            success: true,
            url: `https://assets.capcons.com/CapconsSage/${ImageGeneratedName}`,
        }),
        { status: 200 }
    );
};
