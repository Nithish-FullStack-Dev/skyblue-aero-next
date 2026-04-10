'use client';

import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion } from 'motion/react';

export const BLUR_DIRECTIONS = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
} as const;

export type ProgressiveBlurProps = {
  direction?: keyof typeof BLUR_DIRECTIONS;
  blurLayers?: number;
  className?: string;
  blurIntensity?: number;
} & HTMLMotionProps<'div'>;

function getLayerStyle(
  direction: keyof typeof BLUR_DIRECTIONS,
  progress: number,
  blurAmount: number
) {
  const sharedStyles = {
    backdropFilter: `blur(${blurAmount}px)`,
    WebkitBackdropFilter: `blur(${blurAmount}px)`,
    backgroundColor: 'rgba(255,255,255,0.01)',
    willChange: 'backdrop-filter',
    transform: 'translateZ(0)',
  } as const;

  switch (direction) {
    case 'left':
      return {
        ...sharedStyles,
        left: 0,
        top: 0,
        bottom: 0,
        width: `${progress * 100}%`,
        maskImage:
          'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)',
      };

    case 'right':
      return {
        ...sharedStyles,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${progress * 100}%`,
        maskImage:
          'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage:
          'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)',
      };

    case 'top':
      return {
        ...sharedStyles,
        left: 0,
        right: 0,
        top: 0,
        height: `${progress * 100}%`,
        maskImage:
          'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)',
      };

    case 'bottom':
    default:
      return {
        ...sharedStyles,
        left: 0,
        right: 0,
        bottom: 0,
        height: `${progress * 100}%`,
        maskImage:
          'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage:
          'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)',
      };
  }
}

export function ProgressiveBlur({
  direction = 'bottom',
  blurLayers = 10,
  className,
  blurIntensity = 18,
  ...props
}: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2);

  return (
    <motion.div
      className={cn(
        'pointer-events-none relative overflow-hidden rounded-[inherit]',
        className
      )}
      aria-hidden='true'
      {...props}
    >
      {Array.from({ length: layers }).map((_, index) => {
        const progress = (index + 1) / layers;
        const blurAmount = progress * blurIntensity;

        return (
          <div
            key={index}
            className='absolute'
            style={getLayerStyle(direction, progress, blurAmount)}
          />
        );
      })}
    </motion.div>
  );
}