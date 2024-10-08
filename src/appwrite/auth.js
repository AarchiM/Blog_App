import conf from "../conf.js";
import { Client, Account, ID } from 'appwrite';

export class AuthService
{ 
    client = new Client();
    account;

    constructor()
    {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name })
    {
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if (userAccount)
            {
                //call ANOTHER METHOD
            } else{
                return userAccount;
            }
        } catch (error)
        {
            throw error;
        }
    }

    async login({ email, password })
    {
        try {
            return await this.account.createElementSession(email, password);
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;