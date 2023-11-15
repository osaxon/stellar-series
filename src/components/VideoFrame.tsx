export default function VideoFrame(src: string) {
    return (
        <div class="aspect-video">
            <iframe
                src={src}
                title="youtube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
}
