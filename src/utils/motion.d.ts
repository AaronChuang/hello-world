export declare const textVariant: (delay: Number) => {
    hidden: {
        y: number;
        opacity: number;
    };
    show: {
        y: number;
        opacity: number;
        transition: {
            type: string;
            duration: number;
            delay: Number;
        };
    };
};
export declare const fadeIn: (direction: String, type: String, delay: Number, duration: Number) => {
    hidden: {
        x: number;
        y: number;
        opacity: number;
    };
    show: {
        x: number;
        y: number;
        opacity: number;
        transition: {
            type: String;
            delay: Number;
            duration: Number;
            ease: string;
        };
    };
};
export declare const zoomIn: (delay: Number, duration: Number) => {
    hidden: {
        scale: number;
        opacity: number;
    };
    show: {
        scale: number;
        opacity: number;
        transition: {
            type: string;
            delay: Number;
            duration: Number;
            ease: string;
        };
    };
};
export declare const slideIn: (direction: String, type: String, delay: Number, duration: Number) => {
    hidden: {
        x: string | number;
        y: string | number;
    };
    show: {
        x: number;
        y: number;
        transition: {
            type: String;
            delay: Number;
            duration: Number;
            ease: string;
        };
    };
};
export declare const staggerContainer: (staggerChildren: Number, delayChildren: Number) => {
    hidden: {};
    show: {
        transition: {
            staggerChildren: Number;
            delayChildren: Number;
        };
    };
};
