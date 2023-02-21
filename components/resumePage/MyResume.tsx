import IconTitle from "./IconTitle"
import ResumeItem from "./ResumeItem"
import { FaGraduationCap, FaNetworkWired } from "react-icons/fa"
import ResumeSkeleton from "../skeleton/ResumeSkeleton"
import resumeOperations from "../../graphqlOperations/resume"
import { ExperienceData } from "../../types"
import { useQuery } from "@apollo/client"
import { useMemo } from "react"

interface ExperienceQuery {
  resumes: ExperienceData[]
}

interface FilteredDataI {
  experience: ExperienceData[]
  education: ExperienceData[]
}

export default function MyResume() {
  const { data, error } = useQuery<ExperienceQuery>(
    resumeOperations.Queries.getExperience
  )

  const filteredData = useMemo<FilteredDataI | undefined>(() => {
    
    if (data === undefined) return undefined;
    
    const experience: ExperienceData[] = [];
    const education: ExperienceData[] = [];

    const resumes = [...data.resumes].sort((a,b) => Number(b.badge.split(" ")[0]) - Number(a.badge.split(" ")[0]))

    resumes.forEach((r) => {
      if (r.experience) experience.push(r);
      else education.push(r);
    });

    return {
       education,
       experience
    }

  }, [data])

  if (error) console.log(error)

  return (
    <ul className="grid sm:grid-cols-2 grid-cols-1">
      <li className="py-8 px-12">
        <IconTitle title="experience" Icon={FaNetworkWired} />

        {filteredData === undefined ? (
          <>
            <ResumeSkeleton border />
            <ResumeSkeleton border />
            <ResumeSkeleton />
          </>
        ) : (
          filteredData.experience.map((r, idx) => (
            <ResumeItem
              key={r.id}
              resume={r}
              border={idx !== filteredData.experience.length - 1}
            />
          ))
        )}
      </li>

      <li className="py-8 px-12 relative vCustomLine sm:before:block before:hidden before:left-0">
        <IconTitle title="education" Icon={FaGraduationCap} />

        {filteredData === undefined ? (
          <>
            <ResumeSkeleton border />
            <ResumeSkeleton border />
            <ResumeSkeleton />
          </>
        ) : (
          filteredData.education.map((r, idx) => (
            <ResumeItem
              key={r.id}
              resume={r}
              border={idx !== filteredData.education.length - 1}
            />
          ))
        )}
      </li>
    </ul>
  )
}
