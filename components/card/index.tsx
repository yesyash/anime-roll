import { cn } from "@/helpers/classname";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BlurImage } from "../blur-image";

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
    let originalHeight = originalTitleRomanised.length * 25;

    let finalHeight =
        originalHeight >= 550
            ? 450
            : originalHeight <= 380
            ? 380
            : originalHeight;

    if (windowWidth < 600) {
        finalHeight =
            originalHeight >= 550
                ? 250
                : originalHeight >= 400
                ? originalHeight - 200
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
                        <BlurImage url={imgUrl} alt={title} />
                    </div>

                    <div>
                        <h3 className="mt-3 mb-1 text-lg font-bold leading-6 md:mt-4 md:text-xl">
                            {title}
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
