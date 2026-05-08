'use server'


export const postBloodReq = async (formData) => {

    const res = await fetch(`http://localhost:5000/blood-req`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    const data = await res.json();
    
    return data;

}