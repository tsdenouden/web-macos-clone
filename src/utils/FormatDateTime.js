const FormatDateTime = (new_date) => {
    let local_time = new_date.toLocaleString(
        'en-US', 
        { 
            weekday: 'long',
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true 
        }
    )
    local_time = local_time.replace('day', '')
    return local_time
}

export default FormatDateTime