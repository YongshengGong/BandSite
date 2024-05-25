
const api_key=
{
    "api_key": "324d476a-da96-4fa9-a553-491afa44ae75"
};

class BandSiteApi{
    constructor(apiKey){
        this.apiKey=apiKey;
        this.baseUrl="unit-2-project-api-25c1595833b2.herokuapp.com";
       async function postComment(obj){
        try{
         const res=await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`,obj);
       }
       catch(error){
        console.log(error);
       }
       }
       async function getComment(){
        try{
         const res=await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
       }
       catch(error){
        console.log(error);
       }
       }
       async function getShows(){
        try{
         const res=await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
       }
       catch(error){
        console.log(error);
       }
       }
    }
}
export default BandSiteApi;