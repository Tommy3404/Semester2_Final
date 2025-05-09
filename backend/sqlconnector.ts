import mysql from "npm:mysql2"

export const connection = mysql.createConnection({
  host: "localhost",
  user: "web",
  password: "AGoodPassword",
  database: "Sem2Final"
})

connection.connect((err)=> {
  if(err) console.log(err);
})

connection.query(`SELECT * FROM Event`, (err, results)=> {
        if(err) throw err
        console.log(results);
        
      })

      connection.query(`SELECT * FROM Game`, (err, results)=> {
              if(err) throw err
              console.log(results);
              
            })

            connection.query(`SELECT * FROM Host`, (err, results)=> {
                    if(err) throw err
                    console.log(results);
                    
                  })