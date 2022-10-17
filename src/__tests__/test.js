const amplify = require('aws-amplify')

console.log(amplify.Auth)
console.log(amplify.Amplify)

test('Connection Test', () => {
    console.log("Testing connectivity to Amplify Resources")
    console.log(amplify.Geo.getAvailableMaps())


    expect(amplify.Geo).toBeDefined();
})

test("Map Availability Test", () => {
    console.log("Testing availability of map resources")

})