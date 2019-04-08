import { request } from "https";
import { resolve } from "path";
import { rejects } from "assert";

/* Welcome to Vimeo SDK */
const _helloWorld = "Olá mundo!";
const _token = process.env.REACT_APP_VIMEO_TOKEN; // Public Token
const _identifier = process.env.REACT_APP_VIMEO_CLIENT_IDENTIFIER;
const _secret = process.env.REACT_APP_VIMEO_CLIENT_SECRET;
const _url = "https://api.vimeo.com/";
const _channel_id = "1452157" //Jambo.IO
const _video_id_tmp = "326720438"

const _endpoint_channels = "/channels/" + _channel_id;
const _endpoint_videos = _endpoint_channels + "/videos";

class CallVimeoApi {

    /* Mostly Get requests */
    request (endpoint, extra_url) {
        return new Promise (function(resolve, reject) {
            endpoint = endpoint || "";
            if(extra_url) {
                extra_url = "/" + extra_url;
            }

            fetch(_url + endpoint + '?' + 'access_token=' + _token , {
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
                method: 'GET',
            })
            .then(response => response.json())
            .then(data => {
                console.log("Result");
                console.log(data);
                resolve( data );
            })
            .catch(error => {
                console.log(error);
                rejects(error);
            });
        });
    }


}

class Channels {


    constructor () {

        this._callVimeoAPI = new CallVimeoApi;

    }

    getChannel () {

        return this._callVimeoAPI.request(_endpoint_channels);

    }

    getChannelCategories () {

        return this._callVimeoAPI.request(_endpoint_channels + "/categories");

    }

    getChannelVideos () {
        const _callVimeoAPI = this._callVimeoAPI;
        return new Promise(function(resolve, reject) {
            _callVimeoAPI.request(_endpoint_channels + "/videos")
            .then(data => {
                resolve (data);
            })
            .catch(error=> {
                reject (error);
            });
        });
    }


}

/* Channel ID and Video ID required */
class Videos {


    constructor () {

        this._callVimeoAPI = new CallVimeoApi;
        this._channels = new Channels;

    }

    getVideo (video_id_tmp) {

        this._callVimeoAPI.request(_endpoint_videos + "/" + video_id_tmp);

    }

    getAllVideos () {

        return this._channels.getChannelVideos();

    }


}

export default class Vimeo {


    constructor () {

        this.videos = new Videos;
        this.channels = new Channels;

    }

    helloWorld () {

        return "Olá mundo!";

    }


}
