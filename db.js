import {Pool} from "pg";
const banco = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "renato_full",
    password: "senai",
    port:5432
});
export default banco;