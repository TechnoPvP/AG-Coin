export const AvatarLink = 'https://agcoin.s3.amazonaws.com/user-avatars/';

export function slugify(string: string): string {
    return string
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
}
