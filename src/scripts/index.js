import '../css/style.css'
import '../css/navigation.css'
import { init as initNav } from './navigation.js'
import { init as initAnim } from './animation.js'
const { BASE_URL } = import.meta.env

initNav();
initAnim();