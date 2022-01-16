var extractFromAPIResponse = function (apiResponse, key) {
    return apiResponse[key];
};
var sampleData = {
    user: {
        id: 1,
        name: "Alice"
    },
    isPremiumUser: true
};
extractFromAPIResponse(sampleData, "user"); // { id: 1, name: 'Alice' }
