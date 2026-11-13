import dotenv from 'dotenv';

dotenv.config();

export class Configuration {

    appURL = 'https://demowebshop.tricentis.com/';

    email = process.env.TEST_USERNAME || '';
    password = process.env.TEST_PASSWORD || '';

    FirstName = 'Dinesh_DynamicInput';
    LastName = 'Umale_DynamicInput';

    constructor() {
        if (!this.email || !this.password) {
            throw new Error(
                'TEST_USERNAME or TEST_PASSWORD is missing. Check your .env file or GitHub Secrets.'
            );
        }
    }
}