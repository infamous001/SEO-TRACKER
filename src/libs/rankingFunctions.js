const axios= require("axios");

export async function doGoogleSearch(keyword) {
  const data = { 
    'country': 'us', 
    'query': { 'q': keyword ,"brd_json":1,num:100},
    num:100 
  };
  
  const url = 'https://api.brightdata.com/serp/req?customer=hl_e6e55402&zone=rank_tracker';
  
  const headers = { 
    'Authorization': 'Bearer e22723aa-ea43-4e45-a5a9-5304920efb32'
  };
  
  const response=await axios.post(url, data, { headers });
  if (!response?.headers) {
    console.error('no header in response '+url);
    console.error(data);
    return null;
  } else {
    return response?.headers.get('x-response-id');
  }
}
