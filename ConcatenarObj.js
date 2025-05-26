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

  sources.forEach((source, index) => {

    text += `${index + 1}. ${source.web.title}\n`;

        
    });

    return text;
}


module.exports.concatenar = concatenarSegmentos;
module.exports.formatsources = source;