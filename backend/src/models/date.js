const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const tanggalan = (tanggal_masuk) => {
    const date = new Date(tanggal_masuk)

    const tahun = date.getFullYear()
    const bulan = date.getMonth()
    const tanggal = date.getDate()

    return `${tanggal} - ${months[bulan + 1]} - ${tahun}`
}

export default tanggalan