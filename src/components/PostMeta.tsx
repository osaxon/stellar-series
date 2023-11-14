import dayjs from "dayjs";
import { CalendarDays, Timer } from "lucide-preact";

export default function PostMeta({
    published,
    readTime,
}: {
    published: string;
    readTime: string;
}) {
    return (
        <aside class="grid grid-cols-2 sm:w-2/3 w-full">
            <div class="flex gap-2">
                <CalendarDays class="stroke-primary-800" />
                <p class="mb-lg text-primary-800">
                    {dayjs(published).format("DD MMM YYYY")}
                </p>
            </div>
            <div class="flex gap-2">
                <Timer class="stroke-primary-800" />
                <p class="mb-lg text-primary-800">{readTime} min read</p>
            </div>
        </aside>
    );
}
