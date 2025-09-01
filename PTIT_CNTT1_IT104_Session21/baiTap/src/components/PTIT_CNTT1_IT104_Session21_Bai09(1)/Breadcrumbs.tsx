import React from "react";
import { Breadcrumb } from "antd";
import type { BreadcrumbProps } from "antd";

const Breadcrumbs: React.FC<BreadcrumbProps> = (props) => (
  <Breadcrumb style={{ margin: "16px 0" }} {...props} />
);

export default Breadcrumbs;
