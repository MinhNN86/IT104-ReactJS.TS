import React from "react";

interface ContentBoxProps {
  children: React.ReactNode;
  bgColor: string;
  borderRadius: number;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  children,
  bgColor,
  borderRadius,
}) => (
  <div
    style={{
      padding: 24,
      minHeight: 360,
      background: bgColor,
      borderRadius: borderRadius,
    }}
  >
    {children}
  </div>
);

export default ContentBox;
