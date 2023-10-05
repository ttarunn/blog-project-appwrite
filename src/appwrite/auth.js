import config from "../config/index.js";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
        .setEndpoint(config.appwriteEndpoint)
        .setProject(config.appwriteProjectID);

        this.account = new Account(this.client)
    }

    async createAccount ({ email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                //if user created suucessfully then user will ditrectly logged in
                return this.login({email, password})
            }else{
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    };

    async login({ email, password }){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    };

    async getCurrentUser(){
        try {
            return this.account.get();
        } catch (error) {
            throw error;
        }
        
    };

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService()



export default authService;