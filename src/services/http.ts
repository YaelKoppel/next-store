import {axios} from 
const http=axios.create({
    baseURL: 'https://api.example.com',
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
    }
)