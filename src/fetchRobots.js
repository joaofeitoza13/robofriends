const fetchRobots = async (num) => {
  const randomUserData = await fetch(
    `https://randomuser.me/api/?results=${num}`
  )
  const randomUserJSONData = await randomUserData.json()
  const randomUsers = randomUserJSONData.results.map(
    ({
      name: { first, last },
      gender,
      email,
      login: { uuid, username },
      location: { city, country },
    }) => ({
      photo: '',
      uuid,
      username,
      name: `${first} ${last}`,
      gender,
      email,
      city,
      country,
    })
  )

  const getRoboHashUrl = (id) => `https://robohash.org/${id}.png`

  const generateRoboHashPromises = (num, users) =>
    Array(num).map((_, index) =>
      fetch(getRoboHashUrl(users[index].uuid)).then(
        (response) => (users[index].photo = response.url)
      )
    )

  await Promise.all(generateRoboHashPromises(num, randomUsers))

  return randomUsers
}

export default fetchRobots
