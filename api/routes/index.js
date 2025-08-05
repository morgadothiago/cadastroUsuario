import { Router } from "express"

const User = []

const router = Router()

// Import routes

router.post("/users", (req, res) => {
  const { name, email, idade } = req.body
  const newData = {
    name,
    email,
    idade,
  }
  return res.json({
    message: "Hello World!",
    data: newData,
  })
})

router.get("/", (req, res) => {
  res.send("Hello World!")
})

export default router
