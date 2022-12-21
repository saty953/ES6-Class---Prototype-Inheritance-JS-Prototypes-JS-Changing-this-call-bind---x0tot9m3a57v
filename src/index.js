class API{
    constructor(url){
        this.url=url;
        this.method="GET"
        this.#isecure=url.startsWith("https")
    }

    isSecure(){
        return this.#secure;
    }

    updateURL(url){
        this.url=url;
        this.#secure=url.startsWith("https")
    }
}
module.exports = { API }