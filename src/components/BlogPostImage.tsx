export default function BlogPostImage({
    srcset,
    alt,
}: {
    srcset: { default: string; narrow: string };
    alt: string;
}) {
    return (
        <picture>
            <source srcset={srcset.default} media="(min-width: 600px)" />
            <img
                class="h-auto w-auto mx-auto my-sm"
                src={srcset.narrow}
                alt={alt}
            />
        </picture>
    );
}
