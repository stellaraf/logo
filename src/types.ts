import type { SVGMotionProps } from "framer-motion";

export interface StellarLogoProps extends SVGMotionProps<"svg"> {
  /**
   * Show the "TECHNOLOGIES" block below the logo.
   *
   * @defaultValue `false`
   */
  showTagline?: boolean;
  /**
   * Show the ® symbol after the logo.
   *
   * @defaultValue `false`
   */
  showReserved?: boolean;
  /**
   * Don't animate the star.
   *
   * @defaultValue `false`
   */
  noAnimate?: boolean;
  /**
   * Control the color mode of the logo. In light mode, the color will be a gradient of Stellar's
   * primary colors. In dark mode, the color will be set to `currentColor`.
   *
   * @defaultValue `'light'`
   */
  colorMode?: "light" | "dark";
}

export type StellarColorsType = {
  blue: string;
  purple: string;
};
