"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative flex flex-col justify-between w-full p-6 overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 ease-in-out group hover:shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        red: "bg-red-500/90 text-white",
        blue: "bg-blue-500/90 text-white",
        gray: "bg-gray-200 text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ServiceCardProps
  extends React.ComponentPropsWithoutRef<typeof motion.div>,
    VariantProps<typeof cardVariants> {
  title: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, variant, title, href, imgSrc, imgAlt, ...props }, ref) => {
    return (
      <motion.div
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        {...props}
      >
        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-xl font-bold">{title}</h3>

          <a
            href={href}
            className="mt-auto flex items-center text-sm font-semibold"
          >
            LEARN MORE
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <motion.img
          src={imgSrc}
          alt={imgAlt}
          className="absolute -right-8 -bottom-8 w-32 h-32 object-contain opacity-80"
          whileHover={{ scale: 1.1 }}
        />
      </motion.div>
    );
  }
);

ServiceCard.displayName = "ServiceCard";
export { ServiceCard };