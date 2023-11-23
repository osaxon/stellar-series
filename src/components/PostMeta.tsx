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
        <aside className="grid grid-cols-2 sm:w-2/3 w-full">
            <div className="flex gap-2 items-center">
                <CalendarDays className="stroke-primary-800" />
                <p>{dayjs(published).format("DD MMM YYYY")}</p>
            </div>
            <div className="flex gap-2 items-center">
                <Timer />
                <p>{readTime} min read</p>
            </div>
        </aside>
    );
}
