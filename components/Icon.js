import {
  HiChatAlt2,
  HiNewspaper,
  HiCalendar,
  HiIdentification,
  HiSun,
  HiAcademicCap,
  HiMap,
} from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'

const Icon = ({ name, className }) => {
  const icons = {
    Identification: HiIdentification,
    Sun: HiSun,
    Chat: HiChatAlt2,
    Newspaper: HiNewspaper,
    Calendar: HiCalendar,
    LinkedIn: FaLinkedin,
    AcademicCap: HiAcademicCap,
    Map: HiMap,
  }
  const TitleIcon = icons[name]
  return <TitleIcon className={className} />
}
export default Icon
