export const sortData =(data)=>{
    const sortedData = [...data]
    return sortedData.sort((a,b)=>b.cases.new-a.cases.new)
}
export const sortcases = (data)=>{
    const sortedData = [...data]
    return sortedData.sort((a,b)=>b.cases["1M_pop"]-a.cases["1M_pop"])
}

export const sortdeaths = (data)=>{
    const sortedData = [...data]
    return sortedData.sort((a,b)=>b.deaths["1M_pop"]-a.deaths["1M_pop"])
}