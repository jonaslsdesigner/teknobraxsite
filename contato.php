<?php
// ============================================================
// Envio do formulário de contato — roda na Hostinger (PHP)
// TODO: troque o e-mail de destino e crie o remetente
//       (ex.: site@teknobrax.com.br) no painel da Hostinger.
// ============================================================
$DESTINO   = 'contato@teknobrax.com.br';
$REMETENTE = 'site@teknobrax.com.br';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false]);
  exit;
}

function campo($k) {
  return trim(strip_tags($_POST[$k] ?? ''));
}

$nome      = campo('nome');
$telefone  = campo('telefone');
$email     = filter_var(campo('email'), FILTER_VALIDATE_EMAIL);
$interesse = campo('interesse');
$mensagem  = campo('mensagem');

if (!$nome || !$telefone || !$email) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'erro' => 'Campos obrigatórios']);
  exit;
}

$assunto = "=?UTF-8?B?" . base64_encode("Novo contato pelo site — $nome") . "?=";
$corpo   = "Nome: $nome\nTelefone: $telefone\nE-mail: $email\nInteresse: $interesse\n\nMensagem:\n$mensagem\n";
$headers = "From: Site Teknobrax <$REMETENTE>\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";

$ok = mail($DESTINO, $assunto, $corpo, $headers);
http_response_code($ok ? 200 : 500);
echo json_encode(['ok' => $ok]);
