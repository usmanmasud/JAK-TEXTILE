import Image from "next/image";

// Drawn fabric swatch. Pass `image` (a path in /public) to show a real photo instead.
export default function Swatch({ kind, image, alt = "" }: { kind: string; image?: string; alt?: string }) {
  if (image) {
    return (
      <div className="swatch">
        <Image src={image} alt={alt} fill sizes="(max-width: 700px) 100vw, 33vw" />
      </div>
    );
  }
  return <div className={`swatch swatch--${kind}`} aria-hidden="true" />;
}
