export interface MenuItemInterface {
  text: string,
  link: string
}

export interface NavItemInterface {
  title: string,
  items: MenuItemInterface[],
  link: string
}

export const navItems : NavItemInterface[] = [
  {
    title: 'Javascript',
    items: [
      {
        text: 'Javascript thuần',
        link: '/javascript',
      },
      {
        text: 'ReactJs',
        link: '/reactjs',
      },
    ],
    link: undefined,
  },
  {
    title: 'Javascript 1',
    items: [
      {
        text: 'Javascript thuần 1',
        link: '/javascript-1',
      },
      {
        text: 'ReactJs 1',
        link: '/reactjs-1',
      },
    ],
    link: undefined,
  },
  {
    title: 'Ruby on Rails',
    link: 'ruby-on-rails',
    items: undefined,
  },
  {
    title: 'About me',
    link: 'about-me',
    items: undefined,
  },
]
