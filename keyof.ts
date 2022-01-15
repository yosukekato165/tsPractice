type ParsonKeyof = {
  name: string;
  age: number;
};
type A = keyof ParsonKeyof;

type B = ParsonKeyof[keyof ParsonKeyof];

type User = {
  id: number;
  name: string;
  note?: string;
};

type APIResponse = {
  user: User;
  isPremiumUser: boolean;
};

const extractFromAPIResponse = (
  apiResponse: APIResponse,
  key: keyof APIResponse
): APIResponse[keyof APIResponse] => {
  return apiResponse[key];
};

const sampleData: APIResponse = {
  user: {
    id: 1,
    name: "Alice",
  },
  isPremiumUser: true,
};

extractFromAPIResponse(sampleData, "user"); // { id: 1, name: 'Alice' }
// extractFromAPIResponse(sampleData, "wrongKey");
