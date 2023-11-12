import { Signal, signal } from "@preact/signals";
import { type Post } from "../content/config";

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
            <ul class="flex gap-2 items-center w-72">
                <li class="py-1 text-xs">Selected tags:</li>
                {selectedTags.value &&
                    selectedTags.value.map((tag) => (
                        <li>
                            <button
                                onClick={() => addTag(tag)}
                                class="text-xs p-1 border rounded bg-accent-200 text-accent-800"
                            >
                                {tag}
                            </button>
                        </li>
                    ))}
            </ul>
            <div class="space-y-8">
                {posts
                    .filter(
                        (post) =>
                            selectedTags.value.length === 0 ||
                            post.tags.some((tag) =>
                                selectedTags.value.includes(tag)
                            )
                    )
                    .map(({ image: img, title, exerpt, tags, slug }) => (
                        <div class="list-none relative group flex gap-4 justify-between">
                            <div>
                                <a
                                    href={`/blog/${slug}`}
                                    class="text-xl font-bold underline"
                                >
                                    {title}
                                </a>
                                <p class="text max-w-md">{exerpt}</p>
                                {tags && (
                                    <ul class="flex gap-1">
                                        {tags.map((tag) => (
                                            <li>
                                                <button
                                                    onClick={() => addTag(tag)}
                                                    class="text-xs p-1 border rounded bg-accent-200 text-accent-800"
                                                >
                                                    {tag}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {img && (
                                <img
                                    width={120}
                                    height={120}
                                    src={img ?? ""}
                                    alt=""
                                    class="object-cover opacity-75 group-hover:opacity-100 transition-opacity max-w-full"
                                />
                            )}
                        </div>
                    ))}
            </div>
        </>
    );
}
