import dayjs from "dayjs";
import { CalendarDays, Timer } from "lucide-react";

export default function PostMeta({
    published,
    readTime,
}: {
    published: string;
    readTime: string;
}) {
    return (
        <aside className="grid grid-cols-2 sm:w-2/3 w-full">
            <div className="flex gap-2">
                <CalendarDays className="stroke-primary-800" />
                <p className="mb-lg text-primary-800">
                    {dayjs(published).format("DD MMM YYYY")}
                </p>
            </div>
            <div className="flex gap-2">
                <Timer className="stroke-primary-800" />
                <p className="mb-lg text-primary-800">{readTime} min read</p>
            </div>
        </aside>
    );
}
