@echo off

echo Iniciando processo de build e inicialização do projeto...

echo.
echo 1. Limpando diretório dist...
if exist dist rmdir /s /q dist
mkdir dist

echo.
echo 2. Realizando build de produção...
npm run build

if errorlevel 1 (
    echo.
    echo ERRO: Falha no build do projeto
    pause
    exit /b 1
)

echo.
echo 3. Copiando arquivos para dist...
xcopy /E /I /Y build dist

if errorlevel 1 (
    echo.
    echo ERRO: Falha ao copiar arquivos
    pause
    exit /b 1
)

echo.
echo 4. Iniciando servidor de desenvolvimento...
start npm start

echo.
echo Processo concluído com sucesso!
echo.
echo - Build de produção concluído em dist/
echo - Servidor de desenvolvimento iniciado
pause
