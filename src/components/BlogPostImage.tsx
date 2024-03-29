export default function BlogPostImage({
    srcset,
    alt,
}: {
    srcset: { default: string; narrow: string };
    alt: string;
}) {
    return (
        <picture>
            <source srcSet={srcset.default} media="(min-width: 600px)" />
            <img
                autoPlay
                className="h-auto w-auto mx-auto my-sm rounded"
                src={srcset.narrow}
                alt={alt}
            />
        </picture>
    );
}
