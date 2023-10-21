require('./app')
require('./database/database')
require('./models/models')
require('./router/route.student')

app.listen(4000,()=>{
    console.log('Server running')
})