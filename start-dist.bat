@echo off
echo Iniciando servidor HTTP para a pasta dist...

:: Verifica se o diretório dist existe
if not exist dist (
    echo Erro: Diretório dist não encontrado. Execute o build primeiro.
    pause
    exit /b 1
)

echo.
echo Servidor iniciado em http://localhost:8080
echo.
echo Pressione Ctrl+C para parar o servidor

:: Inicia o servidor HTTP simples usando Python
python -m http.server 8080 --directory dist

echo.
echo Servidor parado
pause
