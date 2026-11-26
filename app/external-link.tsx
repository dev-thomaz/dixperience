import type { ComponentPropsWithoutRef } from "react";

type ExternalLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href" | "rel" | "target"> & {
  href: string;
};

export function ExternalLink(props: ExternalLinkProps) {
  return <a {...props} target="_blank" rel="noopener noreferrer" />;
}
