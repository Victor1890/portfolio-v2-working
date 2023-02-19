import { useQuery } from "@apollo/client"
import { ServiceDataI } from "../../types"
import MyService from "./MyService"
import serviceOperations from "../../graphqlOperations/service"
import { useMemo } from "react"
import { IconType } from "react-icons"
import { SiNextdotjs, SiNodedotjs } from "react-icons/si"
import ServicesSkeleton from "../skeleton/ServicesSkeleton"

interface ServiceQueryI {
  services: ServiceDataI[]
}

interface ServiceData {
  id: string
  title: string
  Icon: IconType
  description: string
}

export default function MyServices() {

  const { data, error, loading } = useQuery<ServiceQueryI>(
    serviceOperations.Queries.getServices
  )

  const services = useMemo<ServiceData[]>(() => {

    if (!data || data === undefined) return [];

    return data.services.map(service => {
      const Icon = service.type.startsWith("front") ? SiNextdotjs : SiNodedotjs
      return {
        id: service.id,
        title: service.title,
        description: service.desc,
        Icon
      }
    })

  }, [data])

  if(loading || error) {
    console.error({ error })
    return <ServicesSkeleton/>
  }

  return (
    <ul className="services grid grid-cols-1 sm:grid-cols-2 relative vCustomLine before:left-1/2 before:hidden sm:before:block before:-translate-x-1/2">
      {services.map((s: ServiceData, idx) => (
        <MyService
          key={s.id}
          name={s.title}
          desc={s.description}
          Icon={s.Icon}
          border={idx < services.length - 2}
          last={idx === services.length - 1}
        />
      ))}
    </ul>
  )
}
