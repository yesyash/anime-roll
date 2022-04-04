import { useState } from "react";
import Image from "next/image";

// Helper functions
import { cn } from "@/helpers/classname";

interface Props {
    url: string;
    alt: string;
    className?: string;
    layout?: "fill" | "responsive";
    width?: number;
    height?: number;
}

export const BlurImage: React.FC<Props> = ({
    url,
    alt,
    className,
    layout = "fill",
    width,
    height,
}) => {
    const [loading, setLoading] = useState(true);

    return (
        <Image
            src={url}
            alt={alt}
            layout={layout}
            width={width}
            height={height}
            objectFit="cover"
            onLoadingComplete={() => setLoading(false)}
            className={cn(
                "transition duration-700 ease-in-out group-hover:scale-100 w-full h-full object-cover bg-slate-200",
                loading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-105 blur-0 grayscale-0",
                className !== undefined ? className : ""
            )}
        />
    );
};
