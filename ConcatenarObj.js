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


module.exports.Text = concatenarSegmentos;