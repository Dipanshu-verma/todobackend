import {Router} from "express"
import {addtodo,getTodos,toggleTodo,updatetodo,deletetodo} from "../controler/addtodo.js"
const todoRouter = Router()

todoRouter.post("/todos",addtodo)
todoRouter.get("/todos",getTodos)
todoRouter.get("/todos/:id",toggleTodo)
todoRouter.put("/todos/:id",updatetodo)
todoRouter.delete("/todos/:id",deletetodo)
export default todoRouter