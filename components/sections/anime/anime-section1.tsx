import { Dispatch, SetStateAction, useState } from "react";

// types
import { Anime } from "@/types/anime";

// components
import { Container } from "@/components/container";
import { BlurImage } from "@/components/blur-image";

interface Props {
    details: Anime;
}

interface ImageBtnProps {
    url: string;
    alt: string;
    setImgFn: Dispatch<SetStateAction<string>>;
    className?: string;
}

const ImageBtn: React.FC<ImageBtnProps> = ({
    url,
    alt,
    setImgFn,
    className,
}) => {
    return (
        <button
            className={`relative block w-16 h-20 md:w-20 md:h-28  ${className}`}
            onClick={() => setImgFn(url)}
        >
            <BlurImage url={url} layout="fill" alt={alt} />
        </button>
    );
};

export const AnimeSection1: React.FC<Props> = ({ details }) => {
    const [activeImg, setActiveImg] = useState(details.image);

    return (
        <section className="bg-teal-100">
            <Container className="relative px-4 md:px-8 lg:px-20 ">
                <div className="pt-12 pb-8 md:transform md:-translate-x-1/2 md:absolute md:w-full left-1/2 md:py-16">
                    <p className="text-center md:text-lg">
                        {details.original_title}
                    </p>

                    <h1 className="mt-4 mb-6 font-serif text-5xl text-center md:text-7xl">
                        {details.title}
                    </h1>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-12 md:h-screen md:gap-x-6">
                    <div className="flex flex-col justify-end order-2 pb-16 md:order-none md:col-start-1 md:col-end-4">
                        <h2 className="pb-10 text-sm font-semibold">
                            Director
                            <span className="block text-base font-normal text-stone-900">
                                {details.director}
                            </span>
                        </h2>

                        <div className="pb-6">
                            <span className="block pb-2 text-sm font-semibold text-stone-700">
                                About
                            </span>
                            <p className="text-sm text-stone-800">
                                {details.description}
                            </p>
                        </div>

                        <div>
                            <span className="block pb-2 text-sm font-semibold text-stone-700">
                                Running Time
                            </span>
                            <p className="text-sm text-stone-700">
                                {details.running_time}
                            </p>
                        </div>
                    </div>

                    <div className="relative md:col-start-5 md:col-end-9 md:transform md:translate-y-72 aspect-[9/16] md:aspect-auto">
                        <div className="absolute top-0 left-0 w-full h-full mix-blend-normal">
                            <BlurImage
                                url={details.image}
                                alt={details.title}
                                className={
                                    activeImg === details.image
                                        ? "opacity-1 transition-opacity"
                                        : "opacity-0 transition-opacity"
                                }
                            />
                        </div>

                        <div className="absolute top-0 left-0 w-full h-full mix-blend-normal">
                            <BlurImage
                                url={details.movie_banner}
                                alt={details.title}
                                className={
                                    activeImg === details.movie_banner
                                        ? "opacity-1 transition-opacity"
                                        : "opacity-0 transition-opacity"
                                }
                            />
                        </div>
                    </div>

                    <div className="flex justify-center pt-8 pb-12 md:col-start-9 md:col-end-12 md:ml-14 md:items-end">
                        <ImageBtn
                            url={details.image}
                            alt={details.title}
                            setImgFn={setActiveImg}
                            className="mr-4 md:mr-6"
                        />

                        <ImageBtn
                            url={details.movie_banner}
                            alt={details.title}
                            setImgFn={setActiveImg}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};
