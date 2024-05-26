class BandSiteApi{
    constructor(apiKey){
        this.apiKey=apiKey;
        this.baseUrl="http://unit-2-project-api-25c1595833b2.herokuapp.com";
    }
       async postComment(obj){
        try{
         const res=await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`,obj);
         return res;
       }
       catch(error){
        console.log(error.response.data);
       }
       }
       async getComment(){
        try{
         const res=await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
         return res.data;
       }
       catch(error){
        console.log(error);
       }
       }
       async getShows(){
        try{
         const res=await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
       }
       catch(error){
        console.log(error);
       }
       }
       async delete(id){
        try{
         const res=await axios.delete(`${this.baseUrl}/comments/${id}?api_key=${this.apiKey}`);
         return res;
       }
       catch(error){
        console.log(error);
       }
       }
}
export default BandSiteApi;