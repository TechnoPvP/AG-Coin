import type { GetSession, Handle } from '@sveltejs/kit';
import * as cookie from "cookie";

export const handle: Handle = async ({ request, resolve }) => {
    const cookieData = request.headers?.cookie ?? "";
    try {
        const response = await fetch('http://localhost:5000/api/auth', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'cookie': cookieData
            },
        });
        const result = await response.json();
        if (result.ok) {
            console.log(result);
        } else {
            console.log(result);
        }
    } catch (err) {
        console.log(err);
    }

    return await resolve(request);
    // request.locals.user = {
    //     email: 'adam@hotmail.com',
    //     name: 'Adam Ghowiba'
    // };

    // console.log(request);
    // const response = await resolve(request);
    // return {
    //     ...response,
    //     headers: {
    //         ...response.headers
    //     }
    // }
}

// export const getSession: GetSession = (request) => {
//     return {
//         user: request.locals.user
//     }
// }

