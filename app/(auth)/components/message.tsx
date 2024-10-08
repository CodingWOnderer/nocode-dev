import React, { FormEventHandler } from "react";
import { MessageFieldComponents } from "./message-field";
import { FinishFieldFieldComponents } from "./finish-field";
import { ProfileFieldComponents } from "./profile-field";

export type AssistantMessageKeysType =
    | "USERNAME"
    | "EMAIL"
    | "PASSWORD"
    | "INTERESTS"
    | "LOCATION"
    | "AGE"
    | "SOCIAL"
    | "PROFILE"
    | "FINISH"
    | "USELESS";

export interface AssitantFields {
    component: React.FC<{
        message: string;
    }>;
    loadingState: React.FC;
}

export const MessageUi: { [key in AssistantMessageKeysType]: AssitantFields } = {
    USERNAME: MessageFieldComponents,
    EMAIL: MessageFieldComponents,
    PASSWORD: MessageFieldComponents,
    INTERESTS: MessageFieldComponents,
    LOCATION: MessageFieldComponents,
    AGE: MessageFieldComponents,
    SOCIAL: MessageFieldComponents,
    PROFILE: ProfileFieldComponents,
    FINISH: FinishFieldFieldComponents,
    USELESS: MessageFieldComponents
};
