const hqLocationData = [
    {
        title:"JG HQ NY",
        latitude: 42.814990,
        longitude: -73.946280
    }
]

const JGHQNY_geodata={
	latitude: 42.814990,
	longitude: -73.946280
}

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
        title: 'Amplify Team Dinner',
        description:
          "It's not everyone, but I'm grateful I was able to see folks in real life and bond over food, drinks and laughs!",
        image:
          'https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_20220330_204113.jpeg',
        longitude: -121.3098577,
        latitude: 47.6248646,
    },
    {
        id: 3,
        title: 'Amplify Team Dinner',
        description:
          "It's not everyone, but I'm grateful I was able to see folks in real life and bond over food, drinks and laughs!",
        image:
          'https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_20220330_204113.jpeg',
        longitude: -121.3098577,
        latitude: 40.6248646,
    },
    {
        id: 4,
        title: 'Amplify Team Dinner',
        description:
          "It's not everyone, but I'm grateful I was able to see folks in real life and bond over food, drinks and laughs!",
        image:
          'https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_20220330_204113.jpeg',
        longitude: -121.3098577,
        latitude: 43.6248646,
    },
    {
        id: 5,
        title: 'Amplify Team Dinner',
        description:
          "It's not everyone, but I'm grateful I was able to see folks in real life and bond over food, drinks and laughs!",
        image:
          'https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_20220330_204113.jpeg',
        longitude: -122.3098577,
        latitude: 44.6248646,
    }
]


export function groupClusters(geodata,max_error){
    console.log(geodata)
    const clusters = {}

    geodata.map((point,index) => {
        console.log(point)
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
                    console.log('old clusta')
                    console.log(clusters[`${coords[0]}|${coords[1]}`])
                    clusters[`${coords[0]}|${coords[1]}`] = [point, ...clusters[`${coords[0]}|${coords[1]}`]]
                    break
                }
                else{
                    console.log('new clusta')
                    clusters[`${point.latitude}|${point.longitude}`] = [point]
                    break
                }
            }
        }
        console.log('post')
        console.log(clusters)
    })
    return clusters
}