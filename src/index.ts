import { config } from 'dotenv';
import { app } from './app';

config();

const start = async () => {
  const PORT = process.env.PORT;
  const NODE_ENV = process.env.NODE_ENV;

  try {
    const server = app.listen(PORT, () => {
      console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
    });

    process.on('unhandledRejection', (err: Error, promise) => {
      console.log(`Unhandled Rejection: ${err.message}`);

      server.close(() => process.exit(1));
    });
  } catch (error) {
    console.error(error);
  }
};

start();
