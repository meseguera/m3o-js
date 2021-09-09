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
exports.DbService = void 0;
const m3o = __importStar(require("@m3o/m3o-node"));
class DbService {
    constructor(token) {
        this.client = new m3o.Client({ token: token });
    }
    create(request) {
        return this.client.call("db", "Create", request);
    }
    ;
    delete(request) {
        return this.client.call("db", "Delete", request);
    }
    ;
    read(request) {
        return this.client.call("db", "Read", request);
    }
    ;
    truncate(request) {
        return this.client.call("db", "Truncate", request);
    }
    ;
    update(request) {
        return this.client.call("db", "Update", request);
    }
    ;
}
exports.DbService = DbService;
