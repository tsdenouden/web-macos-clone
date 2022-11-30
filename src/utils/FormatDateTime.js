const FormatDateTime = (new_date) => {
    let day = new_date.toLocaleString('en-US', { weekday: 'long' })
    day = day.slice(0,3)

    let local_time = new_date.toLocaleString(
        'en-US', 
        { 
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true 
        }
    )
    local_time = day + " " + local_time
    return local_time
}

export default FormatDateTime