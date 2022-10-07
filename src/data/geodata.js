export const JGHQNY_geodata={
	latitude: 42.814990,
	longitude: -73.946280
}

export const HQ_geodata = [
  {
    latitude: 42.814990,
    longitude: -73.946280
  },
  {
    latitude: 34.814990,
    longitude: -97.946280
  }
]

export const userLocationData = [
    {
      id: 1,
      title: 'Amplify Team Dinner',
      description:
        "It's not everyone, but I'm grateful I was able to see folks in real life and bond over food, drinks and laughs!",
      image:
        'https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_20220330_204113.jpeg',
      longitude: -122.3098577,
      latitude: 47.6248646,
    },
    {
        id: 2,
        title: 'First Last',
        description:
          "this user's bio could be displayed here",
        image:
          'https://via.placeholder.com/50x50',
        longitude: -121.3098577,
        latitude: 47.6248646,
    },
    {
        id: 3,
        title: 'First Last',
        description:
          "this user's bio could be displayed here",
        image:
          'https://via.placeholder.com/50x50',
        longitude: -121.3098577,
        latitude: 40.6248646,
    },
    {
        id: 4,
        title: 'First Last',
        description:
          "this user's bio could be displayed here",
        image:
          'https://via.placeholder.com/50x50',
        longitude: -121.3098577,
        latitude: 43.6248646,
    },
    {
        id: 5,
        title: 'First Last',
        description:
          "this user's bio could be displayed here",
        image:
          'https://via.placeholder.com/50x50',
        longitude: -122.3098577,
        latitude: 44.6248646,
    },
    {
        id: 6,
        title: 'First Last',
        description:
          "this user's bio could be displayed here",
        image:
          'https://via.placeholder.com/50x50',
        latitude: 34.814990,
        longitude: -94.946280
    },
    {
        id: 7,
        title: 'First Last',
        description:
          "this user's bio could be displayed here",
        image:
          'https://via.placeholder.com/50x50',
        latitude: 35.814990,
        longitude: -93.946280
    },
    {
        id: 8,
        title: 'First Last',
        description:
          "this user's bio could be displayed here",
        image:
          'https://via.placeholder.com/50x50',
        latitude: 32.814990,
        longitude: -94.946280
    },
    {
        id: 9,
        title: 'First Last',
        description:
          "this user's bio could be displayed here",
        image:
          'https://via.placeholder.com/50x50',
        latitude: 34.814990,
        longitude: -99.946280
    }
]


export function groupClusters(geodata,max_error){
    const clusters = {}

    geodata.map((point,index) => {
        if(index == 0){
            clusters[`${point.latitude}|${point.longitude}`] = [point]
        }
        else{
            for (const [key, value] of Object.entries(clusters)) {
                const coords = key.split("|")

                const latitude_square_error = Math.pow((point.latitude - coords[0]),2)
                const longitude_square_error = Math.pow((point.longitude - coords[1]),2)
                const squared_error = Math.pow(max_error,2)

                if((latitude_square_error < squared_error) && (longitude_square_error < squared_error)){
                    clusters[`${coords[0]}|${coords[1]}`] = [point, ...clusters[`${coords[0]}|${coords[1]}`]]
                    break
                }
                else{
                    clusters[`${point.latitude}|${point.longitude}`] = [point]
                    break
                }
            }
        }
    })
    return clusters
}