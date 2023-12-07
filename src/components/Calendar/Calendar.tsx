import FullCalendar, { EventInput } from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"
import { CalendarEvent } from "../CalendarEvent"
import { CalendarDayHeader } from "../CalendarDayHeader"
import { useWindowSize } from "usehooks-ts"
import { useEffect, useRef } from "react"

export interface CalendarProps {
  timetable: Array<EventInput>
}

export const Calendar = (props: CalendarProps) => {
  const { timetable } = props
  const calendarRef = useRef(null)
  const { width } = useWindowSize()

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi()
      if (width > 1024) {
        calendarApi.changeView("timeGridWeek")
      } else {
        calendarApi.changeView("timeGridDay")
      }
    }
  }, [calendarRef, width])

  return (
    <FullCalendar
      ref={calendarRef}
      contentHeight={1000}
      plugins={[timeGridPlugin]}
      initialView="timeGridWeek"
      allDaySlot={false}
      slotDuration="01:45:00"
      slotMinTime="08:15:00"
      slotMaxTime="20:15:00"
      expandRows={true}
      firstDay={1}
      slotLabelFormat={{
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }}
      eventClassNames="bg-transparent border-transparent !shadow-none"
      dayHeaderContent={(hookProps) => <CalendarDayHeader {...hookProps} />}
      events={timetable}
      eventContent={(hookProps) => <CalendarEvent {...hookProps} />}
      titleFormat={{
        day: "2-digit",
        month: "2-digit",
        year: "2-digit"
      }}
      buttonText={{
        today: "Dzisiaj"
      }}
      locale="es"
      headerToolbar={{
        start: "title",
        center: "",
        end: "prev today next"
      }}
    />
  )
}
