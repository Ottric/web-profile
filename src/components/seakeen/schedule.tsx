import { format, formatDistanceToNow } from "date-fns";
import {
  CalendarClock,
  Clock,
  Hash,
  MapPin,
  NotepadText,
  SquareArrowOutUpRight,
  Tag,
  Users,
} from "lucide-react";

import { getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getSeaKeenSchedule } from "@/lib/seakeen";

export async function Schedule() {
  const t = await getTranslations("SEAKEEN");
  const data = await getSeaKeenSchedule();

  const prev = data.values.slice(1, 6);
  const next = data.values.slice(6);

  return (
    <div className="w-full px-2 py-12 md:px-12">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Schedule</CardTitle>
          <CardDescription>{t("schedule_description")}</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-2 text-xl font-semibold">Upcoming Events</h2>
            <div className="space-y-2">
              {next.map((event, index) => (
                <div key={index} className="bg-primary/20 flex flex-col gap-4 rounded-md p-4">
                  <h3 className="text-lg font-medium">{event[2]}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarClock className="mr-1 inline-block" size={24} />
                      <strong>
                        {new Date(event[0]).getTime() - new Date().getTime() >
                        3 * 24 * 60 * 60 * 1000
                          ? format(event[0], "MMMM d, yyyy")
                          : formatDistanceToNow(`${event[0]}T${event[1] || "00:00"}+07:00`, {
                              addSuffix: true,
                            })}
                      </strong>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Tag className="mr-1 inline-block" size={24} />
                      {event[4]}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="mr-1 inline-block" size={24} />
                      {event[1] || "TBA"}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="mr-1 inline-block" size={24} />
                      {artist({ keen: event[7], sea: event[8], nooong: event[9] })}
                    </div>
                    <div className="col-span-2 flex items-center gap-2 text-sm">
                      <MapPin className="mr-1 inline-block" size={24} />
                      {event[6] || "TBA"}
                    </div>
                  </div>
                  {event[5] && (
                    <div className="space-y-2">
                      <div className="flex flex-col gap-2 text-sm font-semibold">
                        <span className="flex items-center gap-1">
                          <Hash className="inline-block" size={14} strokeWidth={3} />
                          HashTag
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {event[5]
                            .trim()
                            .split(/\s+/)
                            .map((tag, i) => (
                              <Badge key={i} variant="secondary" className="px-2 py-1 text-xs">
                                {tag}
                              </Badge>
                            ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {event[10] && (
                    <div className="space-y-2">
                      <div className="flex flex-col gap-2 text-sm font-semibold">
                        <span className="flex items-center gap-1">
                          <NotepadText className="inline-block" size={24} />
                          Note
                        </span>
                        <p className="indent-8 font-normal">{event[10]}</p>
                      </div>
                    </div>
                  )}
                  {event[11] && (
                    <div className="flex items-center gap-2">
                      <SquareArrowOutUpRight className="inline-block size-6 flex-none" size={24} />
                      <a
                        href={event[11]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap hover:underline"
                      >
                        {event[11]}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold">Previous Events</h2>
            <div className="space-y-2">
              {prev.map((event, index) => (
                <div key={index} className="bg-muted flex flex-col gap-4 rounded-md p-4 opacity-60">
                  <h3 className="text-lg font-medium">{event[2]}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarClock className="mr-1 inline-block" size={24} />
                      <strong>{format(event[0], "MMMM d, yyyy")}</strong>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Tag className="mr-1 inline-block" size={24} />
                      {event[4]}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="mr-1 inline-block" size={24} />
                      {event[1] || "TBA"}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="mr-1 inline-block" size={24} />
                      {artist({ keen: event[7], sea: event[8], nooong: event[9] })}
                    </div>
                    <div className="col-span-2 flex items-center gap-2 text-sm">
                      <MapPin className="mr-1 inline-block" size={24} />
                      {event[6] || "TBA"}
                    </div>
                  </div>
                  {event[5].length > 0 && (
                    <div className="space-y-2">
                      <div className="flex flex-col gap-2 text-sm font-semibold">
                        <span className="flex items-center gap-1">
                          <Hash className="inline-block" size={14} strokeWidth={3} />
                          HashTag
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {event[5].split(/,\s*/).map((tag, i) => (
                            <Badge key={i} variant="secondary" className="px-2 py-1 text-xs">
                              {tag.trim()}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {event[10] && (
                    <div className="space-y-2">
                      <div className="flex flex-col gap-2 text-sm font-semibold">
                        <span className="flex items-center gap-1">
                          <NotepadText className="inline-block" size={24} />
                          Note
                        </span>
                        <p className="indent-8 font-normal">{event[10]}</p>
                      </div>
                    </div>
                  )}
                  {event[11] && (
                    <div className="flex items-center gap-2">
                      <SquareArrowOutUpRight className="inline-block size-6 flex-none" size={24} />
                      <a
                        href={event[11]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap hover:underline"
                      >
                        {event[11]}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface artistProps {
  keen: string;
  sea: string;
  nooong: string;
}

function artist(props: artistProps) {
  const { keen, sea, nooong } = props;
  switch (true) {
    case keen === "TRUE" && sea === "TRUE" && nooong === "TRUE":
      return "SEAKEEN & Nong Nooong";
    case keen === "TRUE" && sea === "TRUE":
      return "SEAKEEN";
    case keen === "TRUE" && nooong === "TRUE":
      return "KEEN & Nong Nooong";
    case sea === "TRUE" && nooong === "TRUE":
      return "SEA & Nong Nooong";
    case keen === "TRUE":
      return "KEEN";
    case sea === "TRUE":
      return "SEA";
    case nooong === "TRUE":
      return "Nong Nooong";
    default:
      return "";
  }
}
