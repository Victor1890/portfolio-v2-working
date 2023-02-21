import { socialMedia } from "../data"

export default function MediaIcons() {
  return (
    <div className="flex gap-5 items-center justify-center mt-7">
      {socialMedia.map(({ id, label, Icon, mediaUrl, info }) => (
        <a rel="noreferrer" href={mediaUrl} target="_blank" key={id} aria-label={info} data-tip={label} title={label}>
          <Icon title={label} aria-label={info} className="text-gray-300 text-3xl transition-all duration-300 hover:text-main-orange cursor-pointer" />
        </a>
      ))}
    </div>
  )
}
