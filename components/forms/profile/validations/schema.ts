import * as z from "zod";

const addressformSchema = z.object({
    streetAddress: z.string().min(1, { message: "Street address is required" }),
    apartmentNumber: z.string().optional(),
    city: z.string().min(1, { message: "City is required" }),
    state: z.string().min(2, { message: "State/Province is required" }),
    postalCode: z.string().min(4, { message: "Postal code is required" }),
    country: z.string().min(1, { message: "Country is required" }),
    phoneNumber: z
        .string()
        .regex(/^\+?\d{7,15}$/, { message: "Enter a valid phone number" })
        .optional(),
});

const profileformSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    profileImage: z
        .any()
        .refine(
            (file) =>
                file &&
                file.length > 0 &&
                ["image/jpeg", "image/png", "image/gif"].includes(file[0]?.type),
            { message: "Please upload a valid image (JPEG, PNG, or GIF)" }
        ),
});

const passwordformSchema = z
    .object({
        currentPassword: z
            .string()
            .min(1, { message: "Current password is required." }),
        newPassword: z
            .string()
            .min(8, { message: "New password must be at least 8 characters." }),
        confirmPassword: z
            .string()
            .min(1, { message: "Please confirm your new password." }),
    })
    .refine((values) => values.newPassword === values.confirmPassword, {
        message: "Password must match!",
        path: ["confirmPassword"],
    });

const socialformSchema = z.object({
    twitter: z.string().optional(),
    facebook: z.string().optional(),
    linkedin: z.string().optional(),
});


type socialProfileType = z.infer<typeof socialformSchema>;
type passwordProfileType = z.infer<typeof passwordformSchema>;
type profileType = z.infer<typeof profileformSchema>;
type addressType = z.infer<typeof addressformSchema>;

export {
    socialformSchema,
    passwordformSchema,
    profileformSchema,
    addressformSchema,
    type socialProfileType,
    type passwordProfileType,
    type profileType,
    type addressType
};
