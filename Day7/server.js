require('./app')
require('./database/database')
require('./models/student.model')
require('./models/user.model')
require('./router/route.student')
require('./router/route.user')
require('./models/associations')

app.listen(4000,()=>{
    console.log('Server running')
})
