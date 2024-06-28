import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Productos } from "./entity/Productos"
import { Categoria } from "./entity/Categoria"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "ejemplodb",
    synchronize: true,
    logging: false,
    entities: [User, Productos, Categoria],
    migrations: [],
    subscribers: [],
})
