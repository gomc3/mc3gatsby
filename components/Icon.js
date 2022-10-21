import {
  HiChatAlt2,
  HiNewspaper,
  HiCalendar,
  HiIdentification,
  HiSun,
  HiAcademicCap,
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
  }
  const TitleIcon = icons[name]
  return <TitleIcon className={className} />
}
export default Icon
