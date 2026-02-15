import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
    children: ReactNode;
    delayChildren?: number;
    staggerChildren?: number;
    className?: string;
}

export const StaggerContainer = ({
    children,
    delayChildren = 0,
    staggerChildren = 0.1,
    className = ""
}: StaggerContainerProps) => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren,
                staggerChildren,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
