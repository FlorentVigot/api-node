const express = require('express')
const app = express()
const posts = require('./posts.json')

// Middleware
app.use(express.json())

app.get('/posts', (req,res) => {
    res.status(200).json(posts)
})

app.get('/posts/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)
    res.status(200).json(post)
})

app.post('/posts', (req,res) => {
    posts.push(req.body)
    res.status(200).json(posts)
})

app.put('/posts/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let post = posts.find(post => post.id === id)
    post.name =req.body.name,
    post.city =req.body.city,
    post.type =req.body.type,
    res.status(200).json(post)
})

app.delete('/posts/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let post = posts.find(post => post.id === id)
    posts.splice(posts.indexOf(post),1)
    res.status(200).json(posts)
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})