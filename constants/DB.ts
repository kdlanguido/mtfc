import clientPromise from "@/lib/mongodb";
const client = await clientPromise;
const Database = client.db(process.env.MONGODB_NAME);

const CollectionNames = {
  Products: "Products",
};

export { client, Database, CollectionNames };
