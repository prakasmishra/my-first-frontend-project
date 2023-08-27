const getDetails = async () => {
    const res = await fetch(`http://127.0.0.1:9000/users`);
    return res.json();
}

interface Params {
    params: { name: string };
}

export default async function Page({ params }: Params) {
    const details = await getDetails();
    // const [detail] = await Promise.all([details])

    return (
        <div>
            {params.name} : {details[0].lastname}
            {/* {params.name} : {details[0].email} */}
        </div>
    )
}


//async await fetch hardcore-api