import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { useGetLecturersPlan } from "../../api/lecturers"
import { LecturerCalendar } from "../../components/LecturerCalendar"

export const LecturerCalendarPage = () => {
  const { name } = useParams()
  const { data } = useGetLecturersPlan(name)
  console.log(data)

  const timetable = useMemo(() => {
    return data?.data.timetable.map((event) => ({
      start: event.start,
      end: event.end,
      title: event.title,
      extendedProps: {
        ...event
      }
    }))
  }, [data])

  return (
    <div>
      <LecturerCalendar timetable={timetable} />
    </div>
  )
}
