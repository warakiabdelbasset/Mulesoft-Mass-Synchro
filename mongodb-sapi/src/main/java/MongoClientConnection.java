import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.MongoException;
import com.mongodb.ServerApi;
import com.mongodb.ServerApiVersion;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import com.mongodb.client.MongoIterable;
import java.util.ArrayList;
import java.util.List;

public class MongoClientConnection {

    private static final String CONNECTION_STRING = "mongodb+srv://Mulesoft:Mulesoft@mulesoft.8zhayxb.mongodb.net/?retryWrites=true&w=majority&appName=Mulesoft";

    private static MongoClientSettings getMongoClientSettings() {
        ServerApi serverApi = ServerApi.builder()
                .version(ServerApiVersion.V1)
                .build();

        return MongoClientSettings.builder()
                .applyConnectionString(new ConnectionString(CONNECTION_STRING))
                .serverApi(serverApi)
                .build();
    }

    public static String connectAndPing() {
        try (MongoClient mongoClient = MongoClients.create(getMongoClientSettings())) {
            try {
                MongoDatabase database = mongoClient.getDatabase("admin");
                database.runCommand(new Document("ping", 1));
                System.out.println("Pinged your deployment. You successfully connected to MongoDB!");
                return "Pinged your deployment. You successfully connected to MongoDB!";
            } catch (MongoException e) {
                e.printStackTrace();
                return "Failed to ping MongoDB: " + e.getMessage();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to connect to MongoDB: " + e.getMessage();
        }
    }
    public static List<String> getAllDatabaseNames() {
        List<String> databaseNames = new ArrayList<>();
        try (MongoClient mongoClient = MongoClients.create(getMongoClientSettings())) {
            MongoIterable<String> databases = mongoClient.listDatabaseNames();
            for (String dbName : databases) {
                databaseNames.add(dbName);
                System.out.println("Database Name: " + dbName);
            }
        } catch (MongoException e) {
            e.printStackTrace();
        }
        return databaseNames;
    }
}
