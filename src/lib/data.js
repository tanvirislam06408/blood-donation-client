export const getUserData = async () => {
    const res = await fetch(`${process.env.PORT_SERVER}/users`);
    const data = await res.json();
    return data;
}


export const getUserById = async (userId) => {
    const res = await fetch(`${process.env.PORT_SERVER}/users/${userId}`);
    const data = await res.json();
    
    return data;
}