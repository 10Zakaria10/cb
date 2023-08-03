import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export enum LayoutType {
  Default = "default",
  AdminSpace = "adminSpace",
}

export const layouts: Record<LayoutType, ComponentType> = {
  [LayoutType.Default]: dynamic(
    async () => import("~layouts/templates/default/default"),
  ),
  [LayoutType.AdminSpace]: dynamic(
    async () => import("~layouts/templates/adminSpace/AdminSpace"),
    { ssr: false },
  ),
} as const;
