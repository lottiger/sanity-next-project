import {about} from './documents/about'
import {article} from './documents/article'
import {event} from './documents/event'
import {bodyTextSection} from './sections/bodyTextSection'
import {imageRowSection} from './sections/imageRowSection'
import {imageSection} from './sections/imageSection'
import {imageWithTextSection} from './sections/imageWithTextSection'
import {subheadingSection} from './sections/subheadingSection'
import {titleSection} from './sections/titleSection'

export const schemaTypes = [
  about,
  titleSection,
  subheadingSection,
  bodyTextSection,
  imageSection,
  event,
  article,
  imageRowSection,
  imageWithTextSection,
]
