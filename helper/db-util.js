import { MongoClient } from "mongodb";

export async function connectDatabase() {
    const mongodbUrl = process.env.MONGODB_URI;
    let client = await MongoClient.connect(mongodbUrl)
    return client;
}

export async function insertDocument(client,collectionName,documentObject) {
    // 创建数据库实体，然后新建collection，插入数据
    const db = client.db()
    const result = await db.collection(collectionName).insertOne(documentObject)
    return result;
}