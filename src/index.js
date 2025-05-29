import app from './app.js'
console.log(process.env.PORT)
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {

    console.log(`Server on ${PORT}`)
})