export default function BlogPostImage({ src }: { src: string }) {
    return (
        <picture>
            <img src={src} alt="" />
        </picture>
    );
}
