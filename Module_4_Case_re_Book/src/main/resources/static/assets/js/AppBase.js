class AppBase {
    // static DOMAIN_SERVER = 'http://localhost:3300';
    // static DOMAIN_SERVER = 'http://localhost:8080';
    static DOMAIN_SERVER = location.origin;

    static API_SERVER = this.DOMAIN_SERVER + '/api';

    static API_BOOK = this.API_SERVER + '/books';

    static API_AUTH = this.API_SERVER + '/auth';

    static API_CLOUDINARY = 'https://res.cloudinary.com/cloudinarymen/image/upload';

    static SCALE_IMAGE_W_90_H_160_Q_100 = 'c_limit,w_90,h_160,q_100';
}

    class Book {
        constructor(id, name, author, price, quantity) {
            this.id = id;
            this.name = name;
            this.author = author;
            this.price = price;
            this.quantity = quantity;
        }
    }



    class BookAvatar {
        constructor(id, fileName, fileFolder, fileUrl) {
            this.id = id;
            this.fileName = fileName;
            this.fileFolder = fileFolder;
            this.fileUrl = fileUrl;
        }
    }

