import '../css/desktop-base.css'
import '../css/mobile.css'
import '../css/wide.css'
import '../css/navigation.css'
import '../css/animation.css'
import { init as initNav } from './navigation.js'
import { init as initAnim } from './animation.js'
const { BASE_URL } = import.meta.env

initNav();
initAnim();
