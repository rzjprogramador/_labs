import "dotenv/config";

const env_app = {
  port: process.env.PORT_APP_EXPRESS || 3333
}

export { env_app  }