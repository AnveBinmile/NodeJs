require('./app')
require('./database/database')
require('./models/student.model')
require('./models/user.model')
require('./router/route.student')
require('./router/route.user')
require('./models/associations')
require('./cron')
// const customCron  = require('./cron');
// customCron();

app.listen(4000,()=>{
    console.log('Server running')
})
