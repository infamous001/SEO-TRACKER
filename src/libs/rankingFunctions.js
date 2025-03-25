const axios= require("axios");

export async function doGoogleSearch(keyword) {
  const data = { 
    'country': 'us', 
    'query': { 'q': keyword ,"brd_json":1} 
  };
  
  const url = 'https://api.brightdata.com/serp/req?customer=hl_4edc76c5&zone=ranktracker';
  
  const headers = { 
    'Authorization': 'Bearer 17e97686-3800-4b5b-8399-c88bb1d8ad65'
  };
  
  const response=await axios.post(url, data, { headers });
  return response.headers.get('x-response-id');
}
