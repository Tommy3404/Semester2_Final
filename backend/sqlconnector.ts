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
//INSERT INTO `Event`(`host`, `address`, `game`, `date`, `id`) VALUES ('"Jeremy"','"123 baltimore ave"','Monopoly','2025-05-23', 5);
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