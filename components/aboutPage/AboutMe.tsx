import { useQuery } from "@apollo/client"
import MyInfo from "../MyInfo"
import profileOperations from "../../graphqlOperations/profile"
import AboutMeSkeleton from "../skeleton/AboutMeSkeleton"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { calculateAge } from "../../helpers/calculate-age.helper"

interface GetUserBio {
  profiles: [{ bio: string }]
}

export default function AboutMe() {
  const { loading, error, data } = useQuery<GetUserBio>(
    profileOperations.Queries.getBio
  )

  if (error) {
    console.error({ error })
    return <AboutMeSkeleton />
  }

  if (loading || data === undefined) return <AboutMeSkeleton />

  return (
    <div className="px-12 py-10">
      <article className="prose max-w-none prose-h2:mb-2.5 prose-h2:text-[1.6rem] prose-p:text-2xl prose-p:leading-[1.65]">
        {data.profiles.map((profile, index) => (
          <ReactMarkdown key={index} remarkPlugins={[remarkGfm]}>
            {profile.bio}
          </ReactMarkdown>
        ))}
      </article>

      <ul className="location grid grid-cols-1 sm:grid-cols-2 mt-6 gap-y-2">
        <MyInfo field="age" value={`${calculateAge(new Date(1999, 6))}`} />
        <MyInfo field="residence" value="Dominican Republic" />
        <MyInfo field="freelance" value="Available" />
        <MyInfo field="address" value="National District, Dominican Republic" />
      </ul>
    </div>
  )
}
