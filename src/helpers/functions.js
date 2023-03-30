export const randomItem = (list) => list[(list.length * Math.random()) | 0]

export const getProjects = (num) =>
  Math.abs(Math.random() * (num - 1) + 1).toFixed()

export const getSeniority = (seniorityList) => randomItem(seniorityList)

export const getJob = (jobList) => randomItem(jobList)

export const getRobotURL = (id) => `https://robohash.org/${id}.png`

export const genRobotPromises = (num, robots) =>
  Array(num)
    .fill()
    .map((_, index) => ({
      url: getRobotURL(robots[index].id),
      robot: robots[index],
    }))

export const addRobotImgURLToUsers = async (num, users) => {
  await Promise.all(
    genRobotPromises(num, users).map((result) =>
      fetch(result.url).then((data) => (result.robot.photo = data.url))
    )
  )
}
