const YouTube = require('youtube-node');

const config = require('./configs/youtube.json');

const youtube = new YouTube();

youtube.setKey(config.key);

// criando a função de busca de vídeos
function searchVideoURL(message, queryText) {
    return new Promise((resolve, _) => {
        youtube.search(`Exercício em casa para ${queryText}`, 2, function(error, result) {
            if (error) {
              resolve('Não foi possível encontrar um vídeo no momento, por favor tente mais tarde');
            } else { 
              const videoIds = result.items.map((item) => item.id.videoId).filter(item => item);
              const youtubeLinks = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`).join(', ');
              resolve(`${message} ${youtubeLinks}`);
            }
          });
    });
}

// exportando a função de busca de vídeos
module.exports.searchVideoURL = searchVideoURL;