import { Signal, signal } from "@preact/signals";

type Post = {
    slug: string;
    title: string;
    exerpt: string;
    published: string;
    tags: Array<string>;
    relatedPosts: Array<string>;
};

const selectedTags: Signal<Array<string>> = signal([]);

export default function PostsGrid({ posts }: { posts: Post[] }) {
    const addTag = (tag: string) => {
        if (selectedTags.value.includes(tag)) {
            selectedTags.value = selectedTags.value.filter(
                (selectedTag) => selectedTag !== tag
            );
        } else {
            selectedTags.value = [...selectedTags.value, tag];
        }
    };
    return (
        <>
            <ul className="flex gap-2 items-center w-72">
                <li className="py-1 text-xs">Selected tags:</li>
                {selectedTags.value &&
                    selectedTags.value.map((tag) => (
                        <li>
                            <button
                                onClick={() => addTag(tag)}
                                className="text-xs p-1 border rounded bg-accent-200 text-accent-800"
                            >
                                {tag}
                            </button>
                        </li>
                    ))}
            </ul>
            <div className="space-y-8">
                {posts
                    .filter(
                        (post) =>
                            selectedTags.value.length === 0 ||
                            post.tags.some((tag) =>
                                selectedTags.value.includes(tag)
                            )
                    )
                    .map(({ title, exerpt, tags, slug }) => (
                        <div className="list-none relative group">
                            <div>
                                <a
                                    href={`/blog/${slug}`}
                                    className="text-xl font-bold underline"
                                >
                                    {title}
                                </a>
                                <p className="text max-w-md">{exerpt}</p>
                                {tags && (
                                    <ul className="flex gap-1">
                                        {tags.map((tag) => (
                                            <li>
                                                <button
                                                    onClick={() => addTag(tag)}
                                                    className="text-xs p-1 border rounded bg-accent-200 text-accent-800"
                                                >
                                                    {tag}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}
