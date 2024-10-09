const express = require("express");
const app = express();
const port = 3000;

// Importante para converter os dados que chegam no POST para JSON. Sem isso o body da requisição não aparece
app.use(express.json());

let data = {
  customers: [],
};

app.get("/customers", (req, res) => {
  res.json(data);
});

app.post("/customers", (req, res) => {
  // Normalmente, estes dados são eviados ao banco de dados, que nos retorna um ID
  // Vamos simular isso atribuindo ao ID o INDEX que o item terá no array

  let newCustomer = req.body;
  newCustomer.id = data.customers.length;

  data.customers.push(newCustomer);
  res.status(201).json({ new_customer_id: newCustomer.id });
});

// USAMOS CHAT GPT PARA NOS AUXILIAR 
app.get('/customers/:id', (req, res) => {
    const cliente = req.params.id
    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).json({ message: 'Cliente não encontrado' });
    }
});

// USAMOS CHAT GPT PARA NOS AUXILIAR 
app.put('/customers/:id', (req, res) => {
    const clienteId = req.params.id;
    const novoClienteId = req.body.novoId;

    if (clienteId && novoClienteId) {
        res.json({ message: "ID do cliente alterado de ${clienteId} para ${novoClienteId}" });
    } else {
        res.status(400).json({ message: 'Erro ao alterar o ID do cliente' });
    }
});

// USAMOS CHAT GPT PARA NOS AUXILIAR 
app.delete('/customers/:id', (req, res) => {
    const clienteId = req.params.id;

    if (clienteId) {
        res.json({ message: "Cliente com ID ${clienteId} deletado com sucesso" });
    } else {
        res.status(404).json({ message: 'Cliente não encontrado' });
    }
});

// NÃO FUNCIONOU (BUSCAR CORREÇÃO COM PROFESSOR)
// app.get("/customers/:index", (req, res) => {
//   const { index } = req.params;
//   res.setHeader('Content-Type', 'application/json');
//   //Retornar apenas o elemento da lista que tem o id solicitado
// 
//   return res.json(index);
// });

//NÃO FUNCIONOU A ATUALIZAÇÃO POR ID
// app.put('/customers/:id', (req, res) => {
//     let idUsuario = req.params.id;
// 	let newId = ;
//     //Alterar dados do elemento da lista com id
// 
// 	return res.json()
// })

// NÃO CONSEGUIMOS FAZER
// app.delete('/customers/:id', (req, res) => {
//     let idUsuario = req.params.id
//     // Remover elemento da lista com id
// })

app.listen(port, () => {
  console.log("Example app listening on port: " + port);
});
