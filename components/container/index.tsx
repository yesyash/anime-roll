import { cn } from "@/helpers/classname";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Container: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={`px-4 md:px-8 lg:px-20 ${className}`}>{children}</div>
    );
};
