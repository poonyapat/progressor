import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Projects from '@/views/Projects'
import Project from '@/views/Project'
import About from '@/views/About'
import Status from '@/views/Status'
import Priority from '@/views/Priority'
import Schedule from '@/views/Schedule'
import Updation from '@/views/Updation'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/project/:project',
    name: 'Project',
    component: Project,
    children: [
      {
        path: 'status',
        name: 'ProjectStatus',
        component: Status
      },
      {
        path: 'priority',
        name: 'ProjectPriority',
        component: Priority
      },
      {
        path: 'updation',
        name: 'ProjectUpdation',
        component: Updation
      },
      {
        path: 'schedule',
        name: 'ProjectSchedule',
        component: Schedule
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
