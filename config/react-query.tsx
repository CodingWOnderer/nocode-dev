"use client"
import { ErrorBoundryFallback } from "@/components/error-boundry-fallback";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient();

export default function ReactQueryWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ErrorBoundary FallbackComponent={ErrorBoundryFallback}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </ErrorBoundary>
    );
}
