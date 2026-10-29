import { waLink } from "@/lib/site";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  message?: string;
};

export default function WaLink({ message, children, ...rest }: Props) {
  return (
    <a href={waLink(message)} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
