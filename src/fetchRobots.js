import {
  getProjects,
  getSeniority,
  getJob,
  seniorityList,
  jobList,
  addRobotImgURLToUsers,
} from './helpers/index'

const randomAPISeed = 'roboHash'

const fetchRobots = async (num, page) => {
  const randomUserData = await fetch(
    `https://randomuser.me/api/?seed=${randomAPISeed}&page=${page}&results=${num}`
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

  await addRobotImgURLToUsers(num, randomUsers)

  return randomUsers
}

export default fetchRobots
