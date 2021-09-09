"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const answer = __importStar(require("./answer"));
const cache = __importStar(require("./cache"));
const crypto = __importStar(require("./crypto"));
const currency = __importStar(require("./currency"));
const db = __importStar(require("./db"));
const email = __importStar(require("./email"));
const emoji = __importStar(require("./emoji"));
const file = __importStar(require("./file"));
const forex = __importStar(require("./forex"));
const geocoding = __importStar(require("./geocoding"));
const helloworld = __importStar(require("./helloworld"));
const id = __importStar(require("./id"));
const image = __importStar(require("./image"));
const ip = __importStar(require("./ip"));
const location = __importStar(require("./location"));
const otp = __importStar(require("./otp"));
const routing = __importStar(require("./routing"));
const rss = __importStar(require("./rss"));
const sentiment = __importStar(require("./sentiment"));
const sms = __importStar(require("./sms"));
const stock = __importStar(require("./stock"));
const stream = __importStar(require("./stream"));
const thumbnail = __importStar(require("./thumbnail"));
const time = __importStar(require("./time"));
const url = __importStar(require("./url"));
const user = __importStar(require("./user"));
const weather = __importStar(require("./weather"));
class Client {
    constructor(token) {
        this.answerService = new answer.AnswerService(token);
        this.cacheService = new cache.CacheService(token);
        this.cryptoService = new crypto.CryptoService(token);
        this.currencyService = new currency.CurrencyService(token);
        this.dbService = new db.DbService(token);
        this.emailService = new email.EmailService(token);
        this.emojiService = new emoji.EmojiService(token);
        this.fileService = new file.FileService(token);
        this.forexService = new forex.ForexService(token);
        this.geocodingService = new geocoding.GeocodingService(token);
        this.helloworldService = new helloworld.HelloworldService(token);
        this.idService = new id.IdService(token);
        this.imageService = new image.ImageService(token);
        this.ipService = new ip.IpService(token);
        this.locationService = new location.LocationService(token);
        this.otpService = new otp.OtpService(token);
        this.routingService = new routing.RoutingService(token);
        this.rssService = new rss.RssService(token);
        this.sentimentService = new sentiment.SentimentService(token);
        this.smsService = new sms.SmsService(token);
        this.stockService = new stock.StockService(token);
        this.streamService = new stream.StreamService(token);
        this.thumbnailService = new thumbnail.ThumbnailService(token);
        this.timeService = new time.TimeService(token);
        this.urlService = new url.UrlService(token);
        this.userService = new user.UserService(token);
        this.weatherService = new weather.WeatherService(token);
    }
}
exports.Client = Client;
