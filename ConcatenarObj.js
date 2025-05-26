function concatenarSegmentos(segmentosArray) {
  return segmentosArray.map(segmento => {
    const textoSegmento = segmento.segment.text;
    const indices = segmento.groundingChunkIndices.join(', ');

    var list = indices.split(',').map(Number);

    for (let i = 0; i < list.length; i++) {

      list[i] = list[i]+ 1;
     
    }
    

    return `${textoSegmento} [${list}]`;
  }).join('\n');
}

function source(sources){
  var text = "";

  var fuente = [];

  sources.forEach((source, index) => {

    // text += `${index + 1}. ${source.web.title}\n`;


  const infromation = {
    id: index + 1,
    titulo:source.web.title, // Genera A, B, C, etc.
    url: source.web.uri // Un precio que varía
  };
  fuente.push(infromation);

        
    });

    return fuente;
}


module.exports.concatenar = concatenarSegmentos;
module.exports.formatsources = source;