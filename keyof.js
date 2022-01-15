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
console.log(extractFromAPIResponse(sampleData, "user"));
// extractFromAPIResponse(sampleData, "wrongKey");
