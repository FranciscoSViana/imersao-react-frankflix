import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/categorias`;

function create() {
  return fetch(`${URL_VIDEOS}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();

        return resposta;
      }

      throw new Error('Não foi possível carregar os dados');
    });
}

export default {
  create,
};
