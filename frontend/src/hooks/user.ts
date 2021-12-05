import host from "$lib/utils/host";
import type { Handle } from "@sveltejs/kit";

const User: Handle = async ({ request, resolve }) => {
    request.locals.user = await fetch(`${host}/api/user/me`, {
        headers: {
            "cookie": request.headers["cookie"],
        },
        credentials: "include"
    })
        .then(res => res.json())
        .catch(error => ({ error }))

    if (request.locals.user.error) request.locals.user = null

    return await resolve(request)
}

export default User