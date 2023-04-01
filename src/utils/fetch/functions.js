export const APISeed = 'roboHash'

const getRobotURL = (id) => `https://robohash.org/${id}.png`

const randomItem = (list) => list[(list.length * Math.random()) | 0]

export const getProjects = (num) =>
  Math.abs(Math.random() * (num - 1) + 1).toFixed()

export const getSeniority = (list) => randomItem(list)

export const getJob = (list) => randomItem(list)

const genRobotPromises = (quantity, robots) =>
  Array(quantity)
    .fill()
    .map((_, index) => ({
      url: getRobotURL(robots[index].id),
      robot: robots[index],
    }))

export const addRobotImgURL = async (num, robots) => {
  await Promise.all(
    genRobotPromises(num, robots).map((result) =>
      fetch(result.url).then((data) => (result.robot.photo = data.url))
    )
  )
}
