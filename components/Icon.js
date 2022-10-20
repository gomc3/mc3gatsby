import {
  HiChatAlt2,
  HiNewspaper,
  HiCalendar,
  HiIdentification,
  HiSun,
} from 'react-icons/hi'

const Icon = ({ name, className }) => {
  const icons = {
    Identification: HiIdentification,
    Sun: HiSun,
    Chat: HiChatAlt2,
    Newspaper: HiNewspaper,
    Calendar: HiCalendar,
  }
  const TitleIcon = icons[name]
  return <TitleIcon className={className} />
}
export default Icon
