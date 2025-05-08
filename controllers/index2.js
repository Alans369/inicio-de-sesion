const {Mistral} = require('@mistralai/mistralai')



async function main() {

    const apiKey = '3TwXrWNdbCq3jR9p0Ar88BuFSx3bc7d4';
    const client = new Mistral({apiKey: apiKey});

   
const embeddingsResponse = await client.embeddings.create({
    model: 'mistral-embed',
    inputs: ["Embed this sentence.", "As well as this one."],
  });
  
  console.log(embeddingsResponse);

  return embeddingsResponse.data


 

}



  const index = async (req, res) => {
  
    res.send(await main())
  };
  
  module.exports = {
    index
  };