export const getUserData = async () => {
    const res = await fetch(`${process.env.PORT_SERVER}/users`);
    const data = await res.json();
    return data;
}