// Create a generic interface PaginatedResponse<T> to represent paginated API responses. Use it to type an API response containing user data.
interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    perPage: number;
}

interface Userr {
    id: number;
    name: string;
}

const userResponse: PaginatedResponse<Userr> = {
    data: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
    ],
    total: 50,
    page: 1,
    perPage: 10,
};

console.log(userResponse.data[0].name);
