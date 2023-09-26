import config from "../config";
import { ID, Databases, Storage, Client, Query } from "appwrite";

export class Service {
    client = new Client()
    database;
    storage;

    constructor() {
        this.client
        .setEndpoint(config.appwriteEndpoint)
        .setProject(config.appwriteProjectID);

        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
    };

    async createPost({title, content, slug, featuredImage, userID, status}){
        try {
            return await this.database.createDocument(
                config.appwriteDatabaseID, 
                config.appwriteCollectionID, 
                slug, 
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID
                }
            )
        } catch (error) {
            console.log("create post ::", error)
        }
    };

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("updatePost ::", error);
            
        }
    };


    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            )
            return true
        } catch (error) {
            console.log("post Delete ::", error);
            return false
        }
    };

    async getPost(slug){
        try {
            return await this.database.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            )
        } catch (error) {
            console.log("get post :: ", error);
            return false
        }
    };

    async getAllPost(queries = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries
            )
        } catch (error) {
            console.log("getAllPost :: ", error)
        }
    };


    //file upload method
    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("upload file :: ", error);
            return false
        }
    };

    async deleteFile(fileID){
        try {
            await this.storage.deleteFile(
                config.appwriteBucketID,
                fileID
            )
            return true
        } catch (error) {
            console.log("delete file :: ", error)
        }
    };

    getFilePreview(fileID){
        return this.storage.getFilePreview(
            config.appwriteBucketID,
            fileID
        )
    }
}

const service = new Service()

export default service