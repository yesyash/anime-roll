import { cn } from "@/helpers/classname";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
    id: string;
    imgUrl: string;
    title: string;
    originalTitleRomanised: string;
    director: string;
    releaseDate: string;
    rtScore: string;
    windowWidth: number;
}

export const Card: React.FC<Props> = ({
    id,
    imgUrl,
    title,
    originalTitleRomanised,
    director,
    releaseDate,
    rtScore,
    windowWidth,
}) => {
    const [isLoading, setIsLoading] = useState(true);
    let originalHeight = originalTitleRomanised.length * 25;

    let finalHeight =
        originalHeight >= 650
            ? 650
            : originalHeight <= 380
            ? 380
            : originalHeight;

    if (windowWidth < 600) {
        finalHeight =
            originalHeight >= 550
                ? 250
                : originalHeight >= 400
                ? originalHeight - 100
                : originalHeight;
    }

    return (
        <div className="w-full">
            <Link href={`/${id}`}>
                <a className="block w-full group">
                    <div
                        className="relative w-full overflow-hidden"
                        style={{ height: `${finalHeight}px` }}
                    >
                        <Image
                            className={cn(
                                "transition duration-700 ease-in-out group-hover:scale-100 w-full h-full object-cover bg-slate-200 object-top",
                                isLoading
                                    ? "scale-110 blur-2xl grayscale"
                                    : "scale-105 blur-0 grayscale-0"
                            )}
                            src={imgUrl}
                            layout="fill"
                            objectFit="cover"
                            onLoadingComplete={() => setIsLoading(false)}
                        />
                    </div>

                    <div>
                        <h3 className="mt-3 text-lg font-bold leading-6 pb-0.5">
                            {originalTitleRomanised}
                        </h3>
                        <div className="font-medium text-stone-700">
                            <span className="block">{director}</span>
                            <span className="block">
                                {releaseDate} / {rtScore}
                            </span>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};
