export const getDate = (dt, type) => {
    const date = new Date(dt*1000)
    return type == "week"?
    date.toLocaleString("RU", {
        weekday:"short",
    }):type == 'day' ? 
    date.toLocaleString("RU", {
        day:"numeric",
    }): type == "month" 
    ? date.toLocaleString("RU", {
        month:"short",
    }): "";
};