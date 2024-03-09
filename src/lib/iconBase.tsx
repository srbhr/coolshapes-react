import React, {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  forwardRef,
} from "react";
import NoiseMask from "./noiseMask";

// icon base props
interface BaseProps extends ComponentPropsWithRef<"svg"> {
  size?: number;
  noise?: boolean;
  shapeName: string;
}

export interface ShapeProps extends ComponentPropsWithRef<"svg"> {
  size?: number;
  noise?: boolean;
}

export type ShapeType = ForwardRefExoticComponent<ShapeProps>;

// default props
const defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  className: "coolshape",
  viewBox: "0 0 200 200",
  width: 200,
  height: 200,
};

const ShapeBase = forwardRef<SVGSVGElement, BaseProps>((props, ref) => {
  const {
    size,
    noise = true,
    shapeName: iconName,
    className,
    children,
    ...rest
  } = props;
  const {
    className: defaultClassName,
    width: defaultWidth,
    height: defaultHeight,
    ...restDefaultProps
  } = defaultProps;
  return (
    <svg
      ref={ref}
      {...restDefaultProps}
      width={size || defaultWidth}
      height={size || defaultHeight}
      {...rest}
      className={`${defaultClassName} ${iconName} ${className || ""}`}>
      {children}
      {<NoiseMask showNoise={noise} id={iconName} />}
    </svg>
  );
});

ShapeBase.displayName = "ShapeBase";
export default ShapeBase;
