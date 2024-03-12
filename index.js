const express=require('express')
const app=express()
const path=require('path')
const http=require('http')
const server=http.createServer(app)
const socketio=require('socket.io')
const io=socketio(server,{cors:{origin:'*'}})
const router=express.Router()
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','pug')
router.get('/',(req,res)=>{
    res.status(200).render('index',{
        title:"Home"
    })
})
router.get('/about',(req,res)=>{
    res.status(200).render('About',{
        title:'About'
    })
})
router.get('/friends',(req,res)=>{
    res.status(200).render('Friends',{
        title:'friends'
    })
})
io.on('connect',(socket)=>{
socket.on('join',({name},callBack)=>{
console.log('joined',name)
if(!name || !password){
callBack("name and password is require")
}
})
}
)
app.use(router);
server.listen(5000,()=>console.log('this is running in 5000'))