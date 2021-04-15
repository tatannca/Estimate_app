// type Props = {
//     status: boolean;
//     message: string;
//     user: {
//         company_name: string;
//         email: string;
//         last_login_at: string;
//         first_name: string;
//         job_type: number;
//         last_name: string;
//         id: string;
//     }
// }

const userAPI = 'http://localhost:5000/api/user'
// const getToken: any = localStorage.getItem('Gaisan_token');
// if (getToken) {
//     const { access_token, id } = JSON.parse(getToken);
// }

export const getCurrentUserAPI = async () => {
    const getToken: any = localStorage.getItem('Gaisan_token');
    if(getToken){
    const { access_token, id } = JSON.parse(getToken);

    const url = `${userAPI}/${id}/profile`;
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type' : 'application/json'
        }
    });
    if(res.ok) {
        return await res.json();
    } else {
        throw new Error('Unregistered users')
    }
    }
}

export const changeProfileAPI = async(data: any) => {
    const getToken: any = localStorage.getItem('Gaisan_token');
    if(getToken){
    const { access_token, id } = JSON.parse(getToken);
    const url = `${userAPI}/${id}/update`;
    const res = await fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    });
    if(res.ok) {
        return await res.json();
    } else {
        throw new Error(`${data}`)
    }
    }
}
