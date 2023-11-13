// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";
const project = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            tags: z.array(z.string()),
            image: image(),
            relatedPosts: z.array(reference("blog")),
        }),
});

const blog = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            exerpt: z.string(),
            published: z.string(),
            tags: z.array(z.string()),
            image: image(),
            relatedPosts: z.array(reference("blog")),
        }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    project,
    blog,
};
