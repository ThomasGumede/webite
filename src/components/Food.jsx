function Food({state}) {
    return (
        <div className="flex flex-col space-y-6 items-center my-14">
            <h2 className="justify-self-center self-center">
                Our Regular Menu Pack
            </h2>

            <div className="justify-self-center self-center flex items-center space-x-11 w-11/12 md:w-auto overflow-x-auto">
                {
                    state.map((stat) => (
                        <a key={stat.id} href={`#${stat.name}`} className="foodnavbtn">{stat.name}</a>
                    ))
                }
                
            </div>
            
        </div>
    )
}

export default Food
