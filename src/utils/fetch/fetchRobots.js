import { seniorityList, jobList } from '../../data/index'
import {
  APISeed,
  getProjects,
  getSeniority,
  getJob,
  addRobotImgURL,
} from '../index'

export const fetchRobots = async (num, page) => {
  const randomUserData = await fetch(
    `https://randomuser.me/api/?seed=${APISeed}&page=${page}&results=${num}`
  )
  const randomUserJSONData = await randomUserData.json()
  const randomUsers = randomUserJSONData.results.map(
    ({
      name: { first, last },
      email,
      login: { uuid, username },
      location: { city, country },
    }) => ({
      photo: '',
      id: uuid,
      username,
      name: `${first} ${last}`,
      projects: getProjects(num),
      job: `${getSeniority(seniorityList)} ${getJob(jobList)}`,
      email,
      location: `${city}, ${country}`,
      hired: false,
    })
  )

  await addRobotImgURL(num, randomUsers)

  return randomUsers
}
