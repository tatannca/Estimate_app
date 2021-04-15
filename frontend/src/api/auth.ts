// {
//     status: boolean,
//     message: string;
//     access_token: string;
//     refresh_token: string;
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

const baseURL = 'http://localhost:5000';
const authAPI = 'api/auth'

export const registerAPI = async (data: any) => {
    const url = `${baseURL}/${authAPI}/register`;

    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: data.password,
            company_name: data.companyName,
            job_type: parseFloat(data.jobtype)
        })
        // body: JSON.stringify({...data})
    });

    if(res.ok) {
        const result = await res.json();
        const { access_token, user: {id} } = result;
        const token: any = {
            'access_token': access_token,
            'id': id
        }
        localStorage.setItem('Gaisan_token', JSON.stringify(token))
    } else {
        throw new Error(`${
            JSON.stringify({
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email,
                password: data.password,
                company_name: data.companyName,
                job_type: parseFloat(data.jobtype)
            })
        }`)
    }
}

export const loginAPI = async (email: string, password: string) => {
    const url = `${baseURL}/${authAPI}/login`;

    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })

    if(res.ok){
        const result = await res.json();
        const { access_token, refresh_token, user: {id} } = result;
        const token:any = {
            'access_token': access_token,
            'refresh_token': refresh_token,
            'id': id
        }
        localStorage.setItem('Gaisan_token', JSON.stringify(token))

        return result;
    } else {
        throw new Error(`${res.status}`)
    }
}

export const logoutAPI = async () => {
    const getToken: any = localStorage.getItem('Gaisan_token');
    const { access_token } = JSON.parse(getToken);

    const url = `${baseURL}/${authAPI}/logout`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type' : 'application/json'
        }
    });
    if(res.ok) {
        localStorage.removeItem('Gaisan_token')
    } else {
        throw new Error('Logout failure')
    }
}
