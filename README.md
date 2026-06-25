# Poções e Soluções

Site de vendas da loja "Poções e Soluções" de Annabelle Merigold. Frontend em React/Vite, backend com ExpressJS.

## Como rodar

### Com Docker (recomendado)

```bash
docker compose up --build
```

- Frontend: `http://localhost:8080`
- Backend: `http://localhost:3001`

Para definir uma senha de admin diferente da padrão:

```bash
ADMIN_PASSWORD=suasenha docker compose up --build
```

### Sem Docker

Backend (na pasta `server/`):

```bash
npm install
npm run dev
```

Frontend (na raiz do projeto):

```bash
npm install
npm run dev
```

- Frontend: `http://localhost:8080`
- Backend: `http://localhost:3001`

## Administração

Acesse `/login` e use a senha padrão `admin` (ou o valor de `ADMIN_PASSWORD` se definida no ambiente do servidor).
