export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Reports']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Daily reports',
    to: '/daily-reports',
    icon: 'cil-notes',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'DSM',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Administration']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Projects',
    to: '/base/tables',
    icon: 'cil-puzzle',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    to: '/base/tables',
    icon: 'cil-puzzle',
  },
]

