import { Image } from "astro:assets";
import { getCollection, type CollectionEntry } from "astro:content";

type Post = CollectionEntry<"blog">;
const posts: Post[] = await getCollection("blog");

export function Posts() {
    return (
        <div class="grid gap-4 grid-cols-1 @xl:grid-cols-2 border">
            {posts.map(({ data: { image: img, title, exerpt, tags } }) => (
                <li class="list-none relative group flex gap-4 border justify-between">
                    <div>
                        <p class="text-xl font-bold">{title}</p>
                        <p class="">{exerpt}</p>
                        {tags && (
                            <ul>
                                {tags.map((tag) => (
                                    <li>{tag}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {img && (
                        <Image
                            width={120}
                            height={120}
                            src={img ?? ""}
                            alt=""
                            class="h-full object-cover object-top opacity-75 group-hover:opacity-100 transition-opacity"
                        />
                    )}
                </li>
            ))}
        </div>
    );
}
