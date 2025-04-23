import { Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint(process.env.AW_ENDPOINT)
    .setProject(process.env.AW_PROJECT_ID);

const databases = new Databases(client);

export {client, databases};