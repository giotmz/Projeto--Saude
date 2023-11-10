<?php

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os dados do formulário
//$nome = $_POST["first_name"];
    //$email = $_POST["last_name"];
    $objetivo = $_POST["email_address"];
    $nota = $_POST["phone_number"];
    $estrutura = $_POST["company"];
    $mensagem_imagens = $_POST["address"];
    $fontes = $_POST["city"];
    $cores = $_POST["state"];
    $satisfacao = $_POST["country"];
    $comentario = $_POST["postcode"];

    // Conecta ao banco de dados SQLite
    $db = new SQLite3('../dados.db');

    // Verifica se a conexão foi bem-sucedida
    if (!$db) {
        die("Erro ao conectar ao banco de dados");
    }

    // Verifica se a tabela feedback existe, caso contrário, cria a tabela
    $checkTableQuery = "SELECT name FROM sqlite_master WHERE type='table' AND name='feedback'";
    $tableExists = $db->querySingle($checkTableQuery);

    if (!$tableExists) {
        // A tabela não existe, então vamos criá-la
        $createQuery = "CREATE TABLE IF NOT EXISTS feedback (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            
            objetivo TEXT,
            nota INTEGER,
            estrutura TEXT,
            mensagem_imagens TEXT,
            fontes TEXT,
            cores TEXT,
            satisfacao TEXT,
            comentario TEXT
        )";
        $createResult = $db->exec($createQuery);

        if (!$createResult) {
            die("Erro ao criar a tabela feedback");
        }
    }

    // Prepara a consulta SQL para inserir os dados no banco de dados
    $query = "INSERT INTO feedback (objetivo, nota, estrutura, mensagem_imagens, fontes, cores, satisfacao, comentario) 
              VALUES ('$objetivo', $nota, '$estrutura', '$mensagem_imagens', '$fontes', '$cores', '$satisfacao', '$comentario')";

    // Executa a consulta SQL
    $result = $db->exec($query);

    // Verifica se a inserção foi bem-sucedida
    if ($result) {
        // Redireciona para feedback.html
        header("Location: feedback.html");
    } else {
        echo "Erro ao enviar o feedback.";
    }

    // Fecha a conexão com o banco de dados
    $db->close();
} else {
    // Se o formulário não foi enviado, redireciona para a página principal
    header("Location: index.html");
    exit();
}
?>
