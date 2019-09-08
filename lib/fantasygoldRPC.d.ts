import RpcClient, { IConfig } from "fantasygoldd-rpc";
import { Network } from "./Network";
export default class FantasyGoldRPC {
    rpc: RpcClient;
    constructor(config?: IConfig);
    generate(nblocks: number): Promise<any>;
}
export declare const rpcClient: FantasyGoldRPC;
export declare function generateBlock(network: Network): Promise<void>;
