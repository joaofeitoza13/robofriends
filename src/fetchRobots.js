const fetchRobots = async (number) => {
  const randomUserData = await fetch(`https://randomuser.me/api/?results=${number}`)
  const randomUserJSONData = await randomUserData.json()
  const randomUsers = randomUserJSONData.results.map(
    ({
      name,
      gender,
      email,
      login: { uuid, username },
      location: { city, country },
    }) => ({
      uuid,
      username,
      name,
      gender,
      email,
      city,
      country,
    })
  )

  return randomUsers
}

export default fetchRobots
