import { forwardRef, useMemo, useId } from "react";
import { motion, isValidMotionProp } from "framer-motion";

import type { MotionProps, AnimationProps } from "framer-motion";
import type { ComponentType, StellarLogoProps, StellarColorsType } from "./types";

/**
 * Stellar Technologies Primary Colors.
 */
export const StellarColors = {
  blue: "#2915d6",
  purple: "#9100fa",
} as StellarColorsType;

/**
 * The Stellar Technologies Inc. Logo.
 *
 * @param props
 * @see https://stellar.tech
 */
export const StellarLogo: ComponentType = forwardRef<SVGSVGElement, StellarLogoProps>(
  (props: StellarLogoProps, ref: React.ForwardedRef<SVGSVGElement>) => {
    const {
      showReserved = false,
      colorMode = "light",
      showTagline = false,
      height: heightProp,
      noAnimate = false,
      width: widthProp,
      children,
      ...rest
    } = props;

    const gradientId = useId();

    const motionProps: MotionProps = Object.fromEntries(
      Object.entries(rest).filter(([k]) => isValidMotionProp(k)),
    );

    const width = useMemo<StellarLogoProps["width"]>(() => {
      let value = widthProp ?? 380;

      if (showReserved && value === 380) {
        value = 400;
      }

      return value;
    }, [widthProp, showReserved]);

    const height = useMemo<StellarLogoProps["height"]>(() => {
      let value = heightProp ?? 150;

      if (showTagline && value === 150) {
        value = 190;
      }

      return value;
    }, [heightProp, showTagline]);

    const animate = useMemo<AnimationProps["animate"]>(() => {
      return noAnimate
        ? { scale: 1, rotate: 0 }
        : { scale: [0, 0.5, 1, 1.25, 1.5, 1, 0.75, 1], rotate: [0, 0, 0, 15, 20, 0, 0, 0] };
    }, [noAnimate]);

    const fill = colorMode === "light" ? `url(#${gradientId})` : "currentColor";

    const viewBox = useMemo<string>(() => {
      let x = "380";
      let y = "150";
      if (showReserved) {
        x = "400";
      }
      if (showTagline) {
        y = "190";
      }
      return `0 0 ${x} ${y}`;
    }, [showReserved, showTagline]);

    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        viewBox={viewBox}
        height={height}
        width={width}
        ref={ref}
        {...motionProps}
      >
        <defs>
          <linearGradient id={gradientId} gradientTransform="rotate(90)">
            <stop offset="5%" stopColor={StellarColors.purple} />
            <stop offset="95%" stopColor={StellarColors.blue} />
          </linearGradient>
        </defs>
        <g>
          <motion.path
            fill={fill}
            animate={animate}
            d="M317.71,123.76a10.12,10.12,0,0,1-7.07,7c3.42,1.38,6.12,5.37,7.07,10.45.94-5.08,3.64-9.07,7.07-10.45A10.08,10.08,0,0,1,317.71,123.76Z"
          />
          <path
            d="M48.31,76a38.08,38.08,0,0,0-9.72-5,33.86,33.86,0,0,0-10.7-1.68A26.15,26.15,0,0,0,18.52,71a22.06,22.06,0,0,0-7.09,4.3,19.45,19.45,0,0,0-4.56,6.22,17.53,17.53,0,0,0-1.61,7.3A16.8,16.8,0,0,0,8.43,99.31a24,24,0,0,0,7.26,6.17,54.29,54.29,0,0,0,8.62,3.86A68.39,68.39,0,0,1,32,112.57a18.78,18.78,0,0,1,5.28,3.81,6.88,6.88,0,0,1,1.55,4.87,8,8,0,0,1-3,6.35c-2.16,1.88-5,2.79-8.86,2.79a23.5,23.5,0,0,1-9-1.71A48.11,48.11,0,0,1,9.32,124l-1.73-1.18a1.37,1.37,0,0,0-1-.2,1.34,1.34,0,0,0-.87.6l-4.5,7.06a1.36,1.36,0,0,0,.39,1.85l1.64,1.11a53.39,53.39,0,0,0,11,5.72A35.86,35.86,0,0,0,27,141.25a25.75,25.75,0,0,0,9.49-1.67,24.11,24.11,0,0,0,7.24-4.4,19.11,19.11,0,0,0,4.85-6.68,19.86,19.86,0,0,0,1.67-8A16.82,16.82,0,0,0,47.05,110a23.07,23.07,0,0,0-7.31-6.11,59.5,59.5,0,0,0-8.57-3.77,78.52,78.52,0,0,1-7.74-3.18,17.45,17.45,0,0,1-5.22-3.71,6.84,6.84,0,0,1-1.55-4.86,7.49,7.49,0,0,1,2.6-5.51c1.75-1.71,4.65-2.58,8.63-2.58A20.84,20.84,0,0,1,35,81.39a29.52,29.52,0,0,1,7.09,3.93l1.78,1.3a1.38,1.38,0,0,0,1.06.23,1.33,1.33,0,0,0,.89-.62l4.46-7.29a1.35,1.35,0,0,0-.38-1.82Z"
            fill={fill}
          />
          <path
            d="M105.67,70.58h-20V50.41a1.35,1.35,0,0,0-2.14-1.11l-9,6.34a1.35,1.35,0,0,0-.58,1.11V71l-10.07.27a1.36,1.36,0,0,0-1.32,1.36v8a1.34,1.34,0,0,0,1.35,1.35h10v40c0,6.5,1.76,11.43,5.24,14.65s8.28,4.75,14.47,4.75a36.16,36.16,0,0,0,5-.33c1.47-.22,3-.49,4.43-.8l1.8-.37a1.36,1.36,0,0,0,1.07-1.47l-.9-8.58a1.35,1.35,0,0,0-1.7-1.17l-2.3.62a30.69,30.69,0,0,1-3.45.67,28.32,28.32,0,0,1-4,.27c-5.68,0-8-2.39-8-8.24V81.74h20A1.36,1.36,0,0,0,107,80.38V71.93A1.35,1.35,0,0,0,105.67,70.58Z"
            fill={fill}
          />
          <path
            d="M174.35,79.33A28.05,28.05,0,0,0,164.64,72a31.57,31.57,0,0,0-13.28-2.65,32.59,32.59,0,0,0-13.64,2.8A31,31,0,0,0,127.19,80a34.56,34.56,0,0,0-6.67,11.55,42.21,42.21,0,0,0-2.26,13.88,40.83,40.83,0,0,0,2.35,13.91,32.74,32.74,0,0,0,7,11.53,32.08,32.08,0,0,0,11.68,7.69,43,43,0,0,0,15.87,2.73,53.71,53.71,0,0,0,11-1.2,45,45,0,0,0,10.5-3.52l1.54-.76a1.35,1.35,0,0,0,.7-1.6l-1.14-3.9c-.22-.64-.49-1.38-.81-2.23l-.79-2a1.36,1.36,0,0,0-.76-.78,1.34,1.34,0,0,0-1.09,0l-2,.93a41.68,41.68,0,0,1-8.26,2.87,38.7,38.7,0,0,1-8.92,1,30,30,0,0,1-11.14-1.88,20.73,20.73,0,0,1-7.63-5.06,22.25,22.25,0,0,1-4.67-7.79,29.3,29.3,0,0,1-1.48-6.73H180.8a1.36,1.36,0,0,0,1.36-1.36v-4a43.47,43.47,0,0,0-1.93-13.11A31.14,31.14,0,0,0,174.35,79.33ZM130.82,97.61a26.57,26.57,0,0,1,1.5-4.8,21,21,0,0,1,4.23-6.51,18.77,18.77,0,0,1,6.28-4.22,21,21,0,0,1,8.22-1.55,20,20,0,0,1,8.3,1.59,16.86,16.86,0,0,1,5.78,4.2,19.76,19.76,0,0,1,3.66,6.44A26.45,26.45,0,0,1,170,97.61Z"
            fill={fill}
          />
          <path
            d="M211.28,22.54h-.43a1.41,1.41,0,0,0-.81.27l-8.56,6.32a1.34,1.34,0,0,0-.55,1.09V138.69a1.36,1.36,0,0,0,1.36,1.36h9a1.36,1.36,0,0,0,1.36-1.36V23.9A1.36,1.36,0,0,0,211.28,22.54Z"
            fill={fill}
          />
          <path
            d="M244.83,22.81,236,29.35a1.38,1.38,0,0,0-.55,1.09V138.69a1.36,1.36,0,0,0,1.36,1.36h9a1.35,1.35,0,0,0,1.35-1.36V23.9A1.5,1.5,0,0,0,244.83,22.81Z"
            fill={fill}
          />
          <path
            d="M377.24,68.92h-2a26.66,26.66,0,0,0-15.32,4.82,41.36,41.36,0,0,0-5,4.05V71.93a1.35,1.35,0,0,0-1.36-1.35h-8.84a1.35,1.35,0,0,0-1.36,1.35v66.76a1.36,1.36,0,0,0,1.36,1.36h9a1.36,1.36,0,0,0,1.36-1.36V94.42a25.15,25.15,0,0,1,20.39-13.89l1.9-.13A1.36,1.36,0,0,0,378.6,79V70.27A1.35,1.35,0,0,0,377.24,68.92Z"
            fill={fill}
          />
          <path
            d="M299.61,127.53c-7.22,3.85-14.53,7.07-22.12,7.7a12.78,12.78,0,0,1-7.86-1.36c-3.29-1.92-4.25-6.05-2.22-10.94a45,45,0,0,1,4.79-8.55,58.79,58.79,0,0,1,9.08-9.89,15.69,15.69,0,0,1-.55-4.08,15.45,15.45,0,0,1,2.64-8.66c-11.3,8.76-21.22,19.3-22.6,22.78a4.55,4.55,0,0,0-.18.57,38.18,38.18,0,0,0-4.41,9.13c-2,6.19-1.08,11.59,2.59,14.79a13.33,13.33,0,0,0,7.78,3.18,36.58,36.58,0,0,0,16.59-2.52c11-4.12,21.58-10.88,31.82-19.08a60.59,60.59,0,0,0,10.64-11.07c-.16,0-.25-.14-.29-.1A120.62,120.62,0,0,1,299.61,127.53Z"
            fill={fill}
          />
          <path
            d="M284.27,100.41a13,13,0,0,0,.09,1.4A12,12,0,0,0,294,112.19c4-2.17,9.59-7.29,14.27-12,0-.14,0-.28,0-.42,0-.38-.06-.75-.11-1.12a12,12,0,0,0-23.89,1.72Z"
            fill={fill}
          />
          <path
            d="M296.28,84.85a15.32,15.32,0,0,1,7.32,1.88,4.39,4.39,0,1,1,6,5.75A15.46,15.46,0,0,1,311.44,97v.07a58,58,0,0,0,5.53-6l.42-.5A14.16,14.16,0,0,0,319,88.06c1.27-2.58,1.3-5.06.16-6.62v0c-2.75-3.84-11.55-2.56-11.55-2.56v0c-4.42.62-9.71,3.08-15.12,6.45A15.64,15.64,0,0,1,296.28,84.85Z"
            fill={fill}
          />
          <path
            d="M307.56,85.57a3.05,3.05,0,0,0-2.44,1.25A16.63,16.63,0,0,1,309.46,91a3,3,0,0,0-1.9-5.4Z"
            fill={fill}
          />
          <path
            d="M334.64,69.46c-.49-.57-2.77-2.94-7.69-3.72l-.41-.11h-.4c-4-.46-9.68.15-17.35,3.43q-18.89,7.44-35.6,24.62c-1.63,1.68-3.22,3.51-4.83,5.27a.61.61,0,0,0,.8-.12c5.91-4.73,11.7-10,17.75-14.07,8.75-5.93,17.81-10.2,27.2-11.76,3.2-.53,6.46-.77,9.59,1.13s3.91,5.89,2.07,10.79c-.38,1-.79,1.92-1.22,2.8A30.08,30.08,0,0,1,322.67,91c-.25.38-.51.74-.77,1.1-.42.6-.87,1.16-1.31,1.73-.27.35-.55.69-.86,1.07-.73.88-1.46,1.73-2.2,2.55-.46.51-.95,1-1.47,1.57l-.17.18c-.68.72-1.36,1.4-2.05,2.08l-1.32,1.28c-.69.66-1.39,1.32-2.09,2L309,105.72a88.94,88.94,0,0,1-11.77,8.43c-.7.42-1.4.84-2.1,1.24l-.86.47a25.21,25.21,0,0,1-6.09,2.28,10,10,0,0,1-2.39.06,2.42,2.42,0,0,1-.63-.15l-.16,0a1.48,1.48,0,0,1-.13-.08,1.76,1.76,0,0,1-.53-.44,6.34,6.34,0,0,1-.8-4.74c0-.17.06-.33.11-.51.17-.67.39-1.31.61-2,.05-.13.09-.26.14-.4.18-.51.37-1,.56-1.59.07-.22.15-.42.22-.65-.14.11-.28.24-.43.35-.46.35-.92.73-1.37,1.1a51.79,51.79,0,0,0-8,8.32,16.18,16.18,0,0,0-1.94,3.36c-1.17,2.71-.88,5.22.93,6.39a11.18,11.18,0,0,0,4.9,1.8c4.36.47,8.64-.87,12.87-2.56,8-3.23,15.59-8.58,23-14.87,6.18-5.27,12.18-11,17.38-19a31.26,31.26,0,0,0,5.12-12.08c.62-3.42.43-6.82-1.3-9.07A16.59,16.59,0,0,0,334.64,69.46Z"
            fill={fill}
          />
          {showReserved && (
            <>
              <path
                d="M394.15,47.46A5.85,5.85,0,1,0,400,53.31,5.85,5.85,0,0,0,394.15,47.46Zm0,10.73A4.88,4.88,0,1,1,399,53.31,4.89,4.89,0,0,1,394.15,58.19Z"
                fill={fill}
              />
              <path
                d="M395.1,53.41v0a1.57,1.57,0,0,0,1.14-1.54,1.5,1.5,0,0,0-.47-1.14,2.49,2.49,0,0,0-1.75-.5,8,8,0,0,0-1.49.13v6h.78V53.67H394c.71,0,1,.34,1.21,1.17a7.79,7.79,0,0,0,.4,1.44h.81a9.16,9.16,0,0,1-.47-1.65A1.49,1.49,0,0,0,395.1,53.41Zm-1-.33h-.79V50.87a3.51,3.51,0,0,1,.77-.07c.82,0,1.38.35,1.38,1.13S394.93,53.08,394.1,53.08Z"
                fill={fill}
              />
            </>
          )}
        </g>
        {showTagline && (
          <g>
            <path d="M7.27,177.2H6V160H0v-1.2H13.24V160h-6Z" fill={fill} />
            <path
              d="M41.41,177.2h-10V158.83h10V160H32.64v7h8.28v1.18H32.64V176h8.77Z"
              fill={fill}
            />
            <path
              d="M68.81,159.72a6.94,6.94,0,0,0-5.44,2.21,8.72,8.72,0,0,0-2,6.06,9.07,9.07,0,0,0,1.87,6.11,6.69,6.69,0,0,0,5.36,2.17,14.32,14.32,0,0,0,4.25-.59v1.13a13.83,13.83,0,0,1-4.55.65,7.73,7.73,0,0,1-6.1-2.51A10.15,10.15,0,0,1,60,168,11,11,0,0,1,61.05,163a7.67,7.67,0,0,1,3-3.3,9.07,9.07,0,0,1,4.63-1.16,11.14,11.14,0,0,1,4.82,1L73,160.72A9.32,9.32,0,0,0,68.81,159.72Z"
              fill={fill}
            />
            <path
              d="M105.67,177.2h-1.3v-9H93.63v9H92.35V158.83h1.28V167h10.74v-8.15h1.3Z"
              fill={fill}
            />
            <path
              d="M139.63,177.2h-1.29l-10.89-16.31h-.1c.1,1.94.15,3.41.15,4.4V177.2h-1.23V158.83h1.28l10.87,16.29h.08c-.08-1.51-.11-2.94-.11-4.3v-12h1.24Z"
              fill={fill}
            />
            <path
              d="M175.68,168a10.26,10.26,0,0,1-2.19,6.92,8.39,8.39,0,0,1-12.05,0,10.3,10.3,0,0,1-2.19-6.95,10.12,10.12,0,0,1,2.21-6.9,8.45,8.45,0,0,1,12,0A10.28,10.28,0,0,1,175.68,168Zm-15,0a9.36,9.36,0,0,0,1.76,6.1,7,7,0,0,0,10.12,0,11.47,11.47,0,0,0,0-12.21,7.06,7.06,0,0,0-10.11,0A9.27,9.27,0,0,0,160.65,168Z"
              fill={fill}
            />
            <path d="M195.3,177.2V158.83h1.28V176h8.77v1.2Z" fill={fill} />
            <path
              d="M239.36,168a10.26,10.26,0,0,1-2.19,6.92,8.39,8.39,0,0,1-12,0,10.3,10.3,0,0,1-2.19-6.95,10.12,10.12,0,0,1,2.21-6.9,7.6,7.6,0,0,1,6-2.52,7.51,7.51,0,0,1,6,2.53A10.28,10.28,0,0,1,239.36,168Zm-15,0a9.36,9.36,0,0,0,1.76,6.1,7,7,0,0,0,10.12,0,11.47,11.47,0,0,0,0-12.21,7.06,7.06,0,0,0-10.11,0A9.27,9.27,0,0,0,224.33,168Z"
              fill={fill}
            />
            <path
              d="M266.21,167.94H273v8.38a15.14,15.14,0,0,1-6,1.14,8.73,8.73,0,0,1-6.67-2.46q-2.32-2.46-2.32-7a10.5,10.5,0,0,1,1.15-5,8.07,8.07,0,0,1,3.3-3.35,10,10,0,0,1,4.92-1.18,12.64,12.64,0,0,1,5.39,1.1l-.51,1.16a11.68,11.68,0,0,0-5-1.11,7.55,7.55,0,0,0-5.76,2.25A8.41,8.41,0,0,0,259.4,168q0,4.15,2,6.24c1.35,1.4,3.33,2.09,5.95,2.09a11.47,11.47,0,0,0,4.31-.71v-6.46h-5.47Z"
              fill={fill}
            />
            <path d="M293,177.2V158.83h1.28V177.2Z" fill={fill} />
            <path
              d="M324.92,177.2h-10V158.83h10V160h-8.76v7h8.27v1.18h-8.27V176h8.76Z"
              fill={fill}
            />
            <path
              d="M354.63,172.47a4.43,4.43,0,0,1-1.69,3.64,7,7,0,0,1-4.5,1.35,13.89,13.89,0,0,1-5.16-.75v-1.28a13.07,13.07,0,0,0,5.06.84,5.68,5.68,0,0,0,3.59-1,3.31,3.31,0,0,0,1.33-2.73,3.14,3.14,0,0,0-.44-1.72,3.93,3.93,0,0,0-1.44-1.25,16.84,16.84,0,0,0-2.91-1.22,10,10,0,0,1-3.89-2.1,4.47,4.47,0,0,1,.54-6.36,6.38,6.38,0,0,1,4.15-1.3,12.25,12.25,0,0,1,4.87,1l-.47,1.11a11.26,11.26,0,0,0-4.37-1,5.15,5.15,0,0,0-3.25.95,3.07,3.07,0,0,0-1.2,2.56,3.3,3.3,0,0,0,.37,1.67,3.34,3.34,0,0,0,1.21,1.18,16.9,16.9,0,0,0,2.89,1.25,14.92,14.92,0,0,1,3.23,1.44,4.58,4.58,0,0,1,1.58,1.58A4.35,4.35,0,0,1,354.63,172.47Z"
              fill={fill}
            />
          </g>
        )}
      </motion.svg>
    );
  },
);
