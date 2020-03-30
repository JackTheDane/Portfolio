import { ISkill } from "../models/interfaces/ISkill"

const skills: {
  [skillName: string]: ISkill;
} = {
  html5: {
    name: 'HTML 5',
    img: '/images/skills/html5.jpg'
  },

  css3: {
    name: 'CSS 3',
    img: '/images/skills/css3.jpg'
  },

  sass: {
    name: 'Sass',
    img: '/images/skills/sass.jpg'
  },

  javascript: {
    name: 'JavaScript ES6+',
    img: '/images/skills/javascript.jpg'
  },

  react: {
    name: 'ReactJS',
    img: '/images/skills/react.jpg'
  },

  angular: {
    name: 'Angular 2+',
    img: '/images/skills/angular.jpg'
  },

  typescript: {
    name: 'Typescript',
    img: '/images/skills/typescript.jpg'
  },

  gulp: {
    name: 'Gulp',
    img: '/images/skills/gulp.jpg'
  },

  cssmodules: {
    name: 'CSS Modules',
    img: '/images/skills/css-modules.jpg'
  },

  php: {
    name: 'PHP',
    img: '/images/skills/php.jpg'
  },

  mysql: {
    name: 'MySQL',
    img: '/images/skills/mysql.jpg'
  },

  wordpress: {
    name: 'WordPress',
    img: '/images/skills/wordpress.jpg'
  },

  mongodb: {
    name: 'MongoDB',
    img: '/images/skills/mongodb.jpg'
  }
}

export default skills;
